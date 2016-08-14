// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());

            initializeAppBar(document.getElementById('appbar').winControl);
        }
    };
    
    app.onloaded = function () {
      App.renderSoundboard(document.getElementById('soundboard-content'));
    };
    
    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.onsettings = function(e) {
        e.detail.applicationcommands = {
            "credits": {
                title: "Credits",
                href: "credits.html"
            }
        };
        WinJS.UI.SettingsFlyout.populateSettings(e);
    };

    var page = WinJS.UI.Pages.define("credits.html", {
      ready: function (element, options) {
        App.renderCredits(element.getElementsByClassName('credits-content')[0]);
      },

      remove: function () {

      }
    });

    function initializeAppBar(appbar) {
      var homeCommand = appbar.getCommandById('home');
      var slideshowCommand = appbar.getCommandById('slideshow');
      var inSlideshow = false;

      homeCommand.onclick = toggleSlideshow.bind(null, false);
      slideshowCommand.onclick = toggleSlideshow.bind(null, true);
      App.onSlideshowChange = refreshCommands;

      function toggleSlideshow(enable) {
        inSlideshow = enable;
        if (enable) {
          App.startSlideshow();
        } else {
          App.stopSlideshow();
        }
      }

      function refreshCommands(inSlideshow) {
        appbar.hide();
        homeCommand.hidden = !inSlideshow;
        slideshowCommand.hidden = inSlideshow;
      }
    }

    app.start();
})();
