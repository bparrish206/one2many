var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyparser.json());

var Player = require('./player');
var team = require('./team');

app.get('/', function(req, res){
  res.send("Team money men scored an average of " + team.mnyMn.avrgP() + " points in five games while team code monkey scored " + team.cdeMky.avrgP() +".  Who do you think will win when they play?  Find out more about the teams by clicking on their urls");
});

app.get('/players/cdeMky', function(req, res){
  res.send("Team code monkey consists of "+team.cdeMky.player1.name + ", " + team.cdeMky.player2.name + ", "+ team.cdeMky.player3.name+'.');
});

app.get('/top', function(req, res){
  res.send("The top player this year is " + Player.bdog.name + "his stats are:" +JSON.stringify(Player.bdog.points));
});

app.get('/players', function(req, res){
  res.send("This years players are " +Player.plist);
});

app.get('/players/mneMn', function(req, res){
  res.end("Team money men consists of " +team.mnyMn.player1.name + ", " + team.mnyMn.player2.name + team.mnyMn.player3.name+".");
});

app.listen(3000);
module.exports = app;
