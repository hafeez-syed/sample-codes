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
    resturl: 'http://www.nwnsport.com/restler_api/apps/_superfooty-mip/mip/',
    original: 'http://www.nwnsport.com/restler_api/apps/_superfooty-mip/mip/'
    //resturl: 'http://localhost:8080/restler_api/apps/_superfooty-mip/mip/',
    //original: 'http://localhost:8080/restler_api/apps/_superfooty-mip/mip/'
  }
});