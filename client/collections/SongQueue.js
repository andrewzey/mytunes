// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    this.on('add', function(song){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      if (this.length === 1) {
        this.remove(song);
      }
    }, this);

    this.on('ended', function (song) {
      //console.log('SongQueue instance heard "ended" event of SongModel instance');
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    });

  },

  playFirst: function(){
    this.at(0).play();
  },

});
