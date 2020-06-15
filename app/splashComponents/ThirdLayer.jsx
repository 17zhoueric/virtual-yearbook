const React = require('react');
const SplashButton = require('./SplashButton');

const ThirdLayer = function () {
  return (
    <div id = "ThirdLayer">
      <div id = "ThirdLayerLeft">
        <SplashButton customText= "Graduate Login" link = '/login'/>
        <div id = 'badLoginText'>Please login with your UC Davis email</div>
      </div>
      <div id = "ThirdLayerRight"><SplashButton customText= "Search" link = '/search'/></div>
    </div>
  );
}

module.exports = ThirdLayer;