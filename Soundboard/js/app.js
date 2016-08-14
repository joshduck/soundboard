(function() {
  "use strict";
  
  React.initializeTouchEvents(true);
  
  var SLIDESHOW_DELAY = 5000;
  var LONG_EVENT_DELAY = 1200;
  var SHORT_EVENT_DELAY = 400;

  var App = window.App = {
    _overlayTimeout: null,
    _actionAttempt: 0,
    _actionSuccess: 0,
    _slideshowTimeout: null,
    _slideshowIndex: 0,
  
    preloadResources: function() {
      var files = Media.getPreloadPaths();
      var imgs = files.map(function (path) {
        var img = new Image();
        img.src = path;
        return img;
      });
    },

    renderCredits: function (element) {
      React.renderComponent(
        Credits(Media.getCredits()),
        element
      );
    },
    
    renderSoundboard: function (element) {
      this._backgroundComponent = Background({
        width: document.documentElement.clientWidth
      });

      this._gridComponent = Grid({ 
        thumbs: Media.getThumbs(), 
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight, 
        onSelect: this.delayCallback(this.onGridSelect, SHORT_EVENT_DELAY, this)
      });
      
      this._overlayComponent = Overlay({
        visible: false,
        onClick: this.delayCallback(this.onOverlayClick, LONG_EVENT_DELAY, this)
      });
    
      var root = React.renderComponent(
        React.DOM.div({ className: 'container' }, [
          this._backgroundComponent,
          this._gridComponent,
          this._overlayComponent
        ]),
        element
      );
      
      window.addEventListener('resize', function() {
        this._gridComponent.setProps({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        });

        this._backgroundComponent.setProps({
          width: document.documentElement.clientWidth
        });
      }.bind(this));

      document.body.addEventListener('keydown', function (e) {
        this.onKeydown(e.keyCode);
      }.bind(this));

      this._ambientNode = document.createElement('audio');
      this._ambientNode.src = Resources.audioPath(Media.getData('audio')['ambient-177966'].file);
      this._ambientNode.controls = false;
      this._ambientNode.autoplay = true;
      this._ambientNode.loop = true;
      this._ambientNode.type = 'audio/mpeg';
      document.body.appendChild(this._ambientNode);

      this._audioNode = document.createElement('audio');
      document.body.appendChild(this._audioNode);
    },
    
    onGridSelect: function(data) {
      this.showOverlay(data.index);
      this._overlayTimeout = setTimeout(this.hideOverlay.bind(this), 8000);
    },
    
    onKeydown: function (keycode) {
      if (this._slideshowTimeout) {
        if (keycode == 27) { // ESC
          this.stopSlideshow();
        } else if ([18, 173, 174, 175, 255].indexOf(keycode) === -1) { // Volume controls, function keys
          this.delayCallback(this.nextSlide, LONG_EVENT_DELAY, this)();
        }
      }
    },

    onOverlayClick: function () {
      if (this._slideshowTimeout) {
        this.nextSlide();
      } else {
        this.hideOverlay();
      }
    },

    delayCallback: function(callback, timeout, context) {
      return function() {
        var args = arguments;
        var now = Date.now();
        if ((now - App._actionSuccess) > timeout &&
            (now - App._actionAttempt) > 100) {
          callback.apply(context, arguments);
          App._actionSuccess = now;
        }
        App._actionAttempt = now;
      }
    },
            
    playAudio: function(audio) {
       if (audio && audio.file) {
         this._audioNode.src = Resources.audioPath(audio.file);
         this._audioNode.play();
       } else {
         this._audioNode.pause();
       }
    },

    showOverlay: function (index) {
      var media = Media.getMedia(index);

      this._overlayComponent.setProps({
        photo: media.photo,
        visible: true
      });
      this.playAudio(media.audio);
    },

    hideOverlay: function () {
      this.playAudio(null);
      clearTimeout(this._overlayTimeout);
      this._overlayComponent.setProps({
        visible: false
      });
    },

    startSlideshow: function () {
      var count = Media.getThumbs().length;
      this._slideshowIndex = Math.floor(count * Math.random());
      this.showOverlay(this._slideshowIndex);
      this._slideshowTimeout = setTimeout(this.nextSlide.bind(this), SLIDESHOW_DELAY);
      this.onSlideshowChange && this.onSlideshowChange(true);
    },

    stopSlideshow: function () {
      clearTimeout(this._slideshowTimeout);
      this._slideshowTimeout = null;
      this.hideOverlay();
      this.onSlideshowChange && this.onSlideshowChange(false);
    },

    nextSlide: function () {
      this._slideshowIndex++;
      if (this._slideshowIndex >= Media.getThumbs().length) {
        this._slideshowIndex = 0;
      }
      
      this.showOverlay(this._slideshowIndex);

      clearTimeout(this._slideshowTimeout);
      this._slideshowTimeout = setTimeout(this.nextSlide.bind(this), SLIDESHOW_DELAY);
      this._actionAttempt = this._actionSuccess = Date.now();
    }
  };
})();