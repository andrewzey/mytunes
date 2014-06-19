// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    this.on('add', function(song){
      this.playFirst();
    }, this);


  },
  playFirst: function(){
    this.at(0).play();
  }

});
