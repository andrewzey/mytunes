// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);
    }, this);

    this.on('ended', function (song) {
      this.remove(this.at(0));
      if (this.length) {
        this.playFirst();
      }
    });

  },

  playFirst: function(){
    this.at(0).play();
  },

});
