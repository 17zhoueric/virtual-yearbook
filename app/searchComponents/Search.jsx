const React = require('react');
const SearchLayer = require('./SearchLayer');
const SearchLogo = require('./SearchLogo');


const Search = function() {
  
  const checkResults = () => {
    if (window.location.href.split('?')[1] == 'noresults'){
      document.getElementById('NoResultsFound').style.display = 'inline';
    }
  }
  
  return (
    <div id = "Search" onLoad = {checkResults}>
      <SearchLayer></SearchLayer>
      <SearchLogo></SearchLogo>
    </div>
  );
}

module.exports = Search;