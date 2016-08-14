window.addEventListener('load', function () {
  App.renderSoundboard(document.getElementById('soundboard-content'));
  
  document.getElementById('credits-trigger').addEventListener('click', function() {
    App.renderCredits(document.getElementById('credits-content'));
  });
});