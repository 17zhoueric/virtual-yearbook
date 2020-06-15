const React = require('react');

const GradBanner = function(props) {
  
  const RedirectProfile = () => {
    window.location.href = '/viewprofile?email=' + props.email;
  }
  
  return (
    <div id = "ResultRow">
      <div id = 'Plaque' onClick = {RedirectProfile}>
        <div id = 'PlaqueLeft'>
          <div id = 'GradPhotoWrapper'>
            <img id = 'GradPhoto' src = {props.image} alt = 'grad photo'/>
          </div>
        </div>
        <div id = 'PlaqueRight'>
          <div id = 'GradName'>
            <h1>{props.name}</h1>
          </div>
          <div id = 'GradBio'>
            <h1>{props.bio}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = GradBanner;