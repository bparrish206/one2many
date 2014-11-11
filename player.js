var Player = function(name){
  var hpyDnc = "I got Gangnum style";
  this.name = name;
  this.points = {
  "Game 1": 0,
  "Game 2": 0,
  "Game 3": 0,
  "Game 4": 0,
  "Game 5": 0,
};
};

Player.prototype.avrgP = function(){
  var result = 0;
  var lgn = 0;
  var pnts = this.points;
  for(var x in pnts) {
    result += pnts[x];
    lgn += 1/2;
  }
  return result/lgn;
};

var display = function(){
  var list = '';
  for(var k = 0; k < arguments.length; k++){
    list += arguments[k].name += ' \n';
  }
  return list;
};

var bdog = new Player();
var rditty = new Player();
var pb = new Player();
var drkNgt = new Player();
var brnEtr = new Player();
var rngWrm = new Player();

bdog.name = 'bdog';
rditty.name = 'rditty';
pb.name = 'pb';
drkNgt.name = 'Dark Nite';
brnEtr.name = "Brain Eater";
rngWrm.name = "Ring Worm";


bdog.points.game1 = 50;
bdog.points.game2 = 38;
bdog.points.game3 = 44;
bdog.points.game4 = 39;
bdog.points.game5 = 60;

rditty.points.game1 = 2;
rditty.points.game2 = 49;
rditty.points.game3 = 8;
rditty.points.game4 = 5;
rditty.points.game5 = 19;

pb.points.game1 = 16;
pb.points.game2 = 22;
pb.points.game3 = 14;
pb.points.game4 = 38;
pb.points.game5 = 32;

drkNgt.points.game1 = 12;
drkNgt.points.game2 = 21;
drkNgt.points.game3 = 14;
drkNgt.points.game4 = 8;
drkNgt.points.game5 = 5;

brnEtr.points.game1 = 2;
brnEtr.points.game2 = 10;
brnEtr.points.game3 = 18;
brnEtr.points.game4 = 6;
brnEtr.points.game5 = 15;

rngWrm.points.game1 = 24;
rngWrm.points.game2 = 38;
rngWrm.points.game3 = 16;
rngWrm.points.game4 = 41;
rngWrm.points.game5 = 36;

var plist = display(bdog, rditty, pb, drkNgt, brnEtr, rngWrm);

module.exports.bdog = bdog;
module.exports.rditty = rditty;
module.exports.pb = pb;
module.exports.drkNgt = drkNgt;
module.exports.brnEtr = brnEtr;
module.exports.rngWrm = rngWrm;
module.exports.plist = plist;
