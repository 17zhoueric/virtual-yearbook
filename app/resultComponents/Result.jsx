const React = require('react');
const {useEffect} = require('react');

/* import all child components */
const ResultDots = require('./ResultDots');
const ResultText = require('./ResultText');
const GradBanner = require('./GradBanner');

const Result = function() {
  
  let [grads, setGrads] = React.useState([]);
  
  useEffect(() => {
    // get queries made by user from url
    let search = window.location.href.split('search=')[1];
    search = search.split('&')[0];
    let search2 = window.location.href.split('search2=')[1];

    // send GET request
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/getGrads?search=' + search + '&search2=' + search2, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onloadend = function(e) {
      if (xhr.responseText == 'no results') {
        window.location.href = '/search?noresults';
      } else {
        //if (JSON.parse(xhr.responseText).length > 0) {
          setGrads(JSON.parse(xhr.responseText));
          console.log('this is', grads);
        //}
      }
    }
    xhr.send();
    
  }, []);
  
    return (
      <div id = "Result">
        <ResultText></ResultText>
        <ResultDots></ResultDots>
        <div id = 'ResultTopHalf'/>
        <div id = 'ResultBottomHalf' >
          {grads.map(function(grad){
            return (
              <GradBanner image = {grad.image} name = {grad.name} bio = {grad.bio} email = {grad.email}/>
            );
          })}
        </div>
      </div>
    );
  
}

module.exports = Result;
