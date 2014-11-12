var Player = function(name){
  var hpyDnc = "I got Gangnum style";
  this.name = name;
  this.points = {
};
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

bdog.points.game1 = {points: 50, rebound: 4, ast:5};
bdog.points.game2 = {points: 40, rebound: 4, ast:5};
bdog.points.game3 = {points: 35, rebound: 4, ast:5};
bdog.points.game4 = {points: 44, rebound: 4, ast:5};
bdog.points.game5 = {points: 14, rebound: 4, ast:5};

rditty.points.game1 = {points: 4, rebound: 1, ast:0};
rditty.points.game2 = {points: 18, rebound: 4, ast:2};
rditty.points.game3 = {points: 29, rebound: 8, ast:5};
rditty.points.game4 = {points: 22, rebound: 6, ast:7};
rditty.points.game5 = {points: 30, rebound: 4, ast:1};

pb.points.game1 = {points: 20, rebound: 4, ast:9};
pb.points.game2 = {points: 10, rebound: 3, ast:8};
pb.points.game3 = {points: 40, rebound: 4, ast:4};
pb.points.game4 = {points: 30, rebound: 7, ast:3};
pb.points.game5 = {points: 20, rebound: 4, ast:1};

drkNgt.points.game1 = {points: 20, rebound: 4, ast:3};
drkNgt.points.game2 = {points: 10, rebound: 1, ast:1};
drkNgt.points.game3 = {points: 4, rebound: 2, ast:5};
drkNgt.points.game4 = {points: 9, rebound: 0, ast:5};
drkNgt.points.game5 = {points: 20, rebound: 4, ast:2};

brnEtr.points.game1 = {points: 7, rebound: 4, ast:1};
brnEtr.points.game2 = {points: 10, rebound: 4, ast:1};
brnEtr.points.game3 = {points: 20, rebound: 4, ast:3};
brnEtr.points.game4 = {points: 10, rebound: 4, ast:4};
brnEtr.points.game5 = {points: 5, rebound: 4, ast:2};

rngWrm.points.game1 = {points: 12, rebound: 4, ast:5};
rngWrm.points.game2 = {points: 5, rebound: 4, ast:5};
rngWrm.points.game3 = {points: 30, rebound: 4, ast:5};
rngWrm.points.game4 = {points: 20, rebound: 4, ast:5};
rngWrm.points.game5 = {points: 10, rebound: 4, ast:5};

var plist = display(bdog, rditty, pb, drkNgt, brnEtr, rngWrm);

module.exports.bdog = bdog;
module.exports.rditty = rditty;
module.exports.pb = pb;
module.exports.drkNgt = drkNgt;
module.exports.brnEtr = brnEtr;
module.exports.rngWrm = rngWrm;
module.exports.plist = plist;
