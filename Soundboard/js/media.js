(function() {
  "use strict";
  
  var Media = window.Media = {
    _data: {},
    _shownMedia: {},
  
    defineData: function(key, value) {
      this._data[key] = value;
    },
    
    getData: function(key) {
      return this._data[key];
    },

    getPreloadPaths: function () {
      var ui = this.getData('ui');

      return Object.keys(ui).map(function(key) {
        return Resources.uiPath(ui[key].file);
      }).concat(
        Media.getThumbs().map(Resources.thumbPath)
      );
    },

    getThumbs: function() {
      return this.getData('groups').map(function(group) {
        return group.thumb;
      });
    },
    
    getMedia: function(groupIndex) {
      var group = this.getData('groups')[groupIndex];
      var shown = this._shownMedia[groupIndex] || [];
      var mediaIndex;
      
      for (var i = 0; i < 10; i++) {
        mediaIndex = Math.floor(Math.random() * group.photos.length);
        if (shown.indexOf(mediaIndex) === -1) {
          break;
        }
      }
      
      shown.unshift(mediaIndex);
      shown.splice(group.photos.length - 1);
      this._shownMedia[groupIndex] = shown;
      
      return {
        photo: this.getData('photos')[group.photos[mediaIndex]],
        audio: this.getData('audio')[(group.audio || [])[mediaIndex]]
      };
    },
            
    getCredits: function() {
      var audio = this.getData('audio');
      var photos = this.getData('photos');
      var ui = this.getData('ui');
      
      var credits = {
        ui: Object.keys(ui).map(function(key) { return ui[key]; }),
        photos: [],
        audio: []
      };
 
      function captureMedia(output, ids, source) {
        ids && ids.forEach(function(id) {
          if (!source[id]) {
            return;
          }
          output.push(source[id]);
        });
      }
      
      this.getData('groups').forEach(function(group) {
        captureMedia(credits.photos, group.photos, photos);
        captureMedia(credits.audio, group.audio, audio);
      });
      
      return credits;
    }
  };
})();