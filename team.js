var player = require('./player');

var Team = function (player1, player2, player3) {
  this.player1 = player1;
  this.player2 = player2;
  this.player3 = player3;
};

Team.prototype.avrgP = function(){
  var teamTot = this.player1.points.game1.points + this.player2.points.game1.points + this.player3.points.game1.points;
  return teamTot;
};

var cdeMky = new Team(player.bdog, player.rditty, player.pb);
var mnyMn = new Team(player.drkNgt, player.brnEtr, player.rngWrm);

module.exports.cdeMky = cdeMky;
module.exports.mnyMn = mnyMn;
