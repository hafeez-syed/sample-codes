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
    //resturl: 'http://www.nwnsport.com/restler_api/apps/_pick-me/pickme/',
    //original: 'http://www.nwnsport.com/restler_api/apps/_pick-me/pickme/'
    resturl: 'http://10.68.105.97:8080/restler_api/apps/_pick-me/pickme/',
    original: 'http://10.68.105.97:8080/restler_api/apps/_pick-me/pickme/'
  }
});