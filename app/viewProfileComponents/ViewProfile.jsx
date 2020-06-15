const React = require('react');

/* import all child components */
const ViewUpdateProfileText = require('./ViewUpdateProfileText');
const ViewProfileLogo = require('./ViewProfileLogo');
const ViewProfileDots = require('./ViewProfileDots');
const ViewProfileImage = require('./ViewProfileImage');
const ViewProfileBio = require('./ViewProfileBio');
const ViewProfileQuestionnaire = require('./ViewProfileQuestionnaire');

const ViewProfile = function() {

          let xhr = new XMLHttpRequest();
          let query = window.location.href.split('email=')[1];
          query = query.replace('#','');

          xhr.open("GET", '/viewProfilePage?email=' + query, true);
          xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

          // set up callback function that will run when the HTTP response comes back
          xhr.onloadend = function(e) {
              // responseText is a string
              let data = JSON.parse(xhr.responseText);

              // get the postcard data out of the object "data" and display profile page
              document.getElementById("serverImage").src = data.image;
              document.getElementById('ProfileBio').textContent = data.bio;
              document.getElementById('ProfileQuestionnaireName').textContent = 'Name: ' + data.name;
              document.getElementById('ProfileQuestionnaireMajor').textContent = 'Major: ' + data.major;
              document.getElementById('ProfileQuestionnaireCollege').textContent = 'College: ' + data.college;
              document.getElementById('ProfileQuestionnaireGender').textContent = 'Gender: ' + data.gender;
              document.getElementById('ProfileQuestionnaireQuote').textContent = 'Quote: ' + data.quote;
          }  

        // send off request
        xhr.send(null); 

        return (
          <div id = "Profile">
            <ViewUpdateProfileText/>
            <ViewProfileLogo/>
            <ViewProfileDots/>
            <div id = "ProfileLeft">
                  <ViewProfileImage/>
            </div>
            <div id = "ProfileRight">
                  <ViewProfileBio/>
                  <ViewProfileQuestionnaire/>
            </div>

          </div>
        );
}

module.exports = ViewProfile;
