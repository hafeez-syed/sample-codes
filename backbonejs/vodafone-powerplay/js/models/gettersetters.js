/* =========================================
   Getter Setter Model to change
   RESTAPI URLs
   ========================================== 
*/

var GSModel = Backbone.GSModel.extend({
  
  setters: {
    resturl: function(url) {
        return url;
    }
  },

  getters: {
    restApiUrl: function() {
        return this.get('resturl');
    },

    restApiOriginalUrl: function() {
        return this.get('original');
    },
  },

  defaults: {
    resturl: 'http://nwnsport.com/restler_api/apps/_vodafone-powerplay/powerplay/',
    original: 'http://nwnsport.com/restler_api/apps/_vodafone-powerplay/powerplay/'
    //resturl: 'http://localhost:8080/restler_api/apps/_vodafone-powerplay/powerplay/',
    //original: 'http://localhost:8080/restler_api/apps/_vodafone-powerplay/powerplay/'
  }
});