(function() {
  var Resources = window.Resources = {
    uiPath: function(file) {
      return '/data/' + file;
    },

    photoPath: function(file) {
      return '/data/photos/' + file;
    },
    
    photoBackground: function(file) {
      return 'url(' + Resources.photoPath(file) + ')';
    },
    
    thumbPath: function(file) {
      return '/data/thumbs/' + file;
    },
    
    thumbBackground: function(file) {
      return 'url(' + Resources.thumbPath(file) + ')';
    },
    
    audioPath: function(file) {
      return '/data/audio/' + file;
    }
  }
})();