  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGAG3kCGUbcNkxiyFruMZ_L03kcAotdjQ",
    authDomain: "rps-multiplayer-dbc4f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-dbc4f.firebaseio.com",
    storageBucket: "https://rps-multiplayer-dbc4f.appspot.com",
    messagingSenderId: "94610817136"
  };
  firebase.initializeApp(config);

  //Select database and Initialize variables
  var database = firebase.database();
  var players = database.ref('/players');
  var chat = database.ref('/chat');
  var playerNum = null;
  var player1 = null;
  var player2 = null;
  var wins = 0;
  var losses = 0;
  var currentPlayer = "";
  var choices = ['rock', 'paper', 'scissors']




  	$(document).ready(function(){

  		$("#player1Btn").hide();
  		$("#player2Btn").hide();

  	// players.on('child_added', function(snapshot){
  	// 	$("#console").append(snapshot.val().userName);
  	// 	var player1 = snapshot.child(1).exists();
  	// 	var player2 = snapshot.child(2).exists();

  	// 	var player1Data = snapshot.child(1).val();
  	// 	console.log(player1Data);
  	// });

  	// chat.on('child_added', function(snapshot){
  	// 	$("#messages").append(snapshot.val().message);
  	// });

  	$("#loginButton").on('click', function(){
  		//event.preventDefault();
  		if(currentPlayer === ""){
  			currentPlayer = $("#userName").val().trim();
  			console.log(currentPlayer);
  			$("#userName").val("");
  		}
  		if(player1 === null){
  			playerNum = 1;
  			var playerRef = database.ref('/players/' + playerNum)
  			playerRef.set({
  				username: currentPlayer,
  				p1wins: wins,
  				p1losses: losses
  		});
  			player1 = 1;

  		} else if(player2 === null){
  			playerNum = 2;
  			var playerRef = database.ref('/players/' + playerNum)
  			playerRef.set({
  				username: currentPlayer,
  				p2wins: wins,
  				p2losses: losses
  		});
  			player2 = 2;
  		} else{
  			$("#console").html("Sorry too many players, try again later!")
  		}
  		

  	});

  });
