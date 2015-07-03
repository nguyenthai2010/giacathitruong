
var AppnextPlugin = {
    
    initializeWithPlacementID: function(placementID) {
      return cordova.exec(null, null, 'Appnext', 'initializeWithPlacementID', [placementID]);
    }
  , showPopup: function() {
      return cordova.exec(null, null, 'Appnext', 'showPopup', []);
    }
  , hidePopup: function() {
      return cordova.exec(null, null, 'Appnext', 'hidePopup', []);
    }
  , cacheAd: function() {
      return cordova.exec(null, null, 'Appnext', 'cacheAd', []);
    }
  , isVisible: function(successCallback) {
      return cordova.exec(successCallback, null, 'Appnext', 'isVisible', []);
    }
  , setAdsCallback: function(successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'Appnext', 'setAdsCallback', []);
    }
};