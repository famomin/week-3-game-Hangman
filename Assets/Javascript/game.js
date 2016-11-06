var teamsAvailable;     // Words Available in the game
var categoryChosen;     // Selected catagory
var getHint;            // Word getHint
var finalAnswer;
var teamToGuess;        // Selected team to guess 
var conferenceSelected;  // conference selected
var divisionSelected; 	// division in conference
var userGuess;         // changed from Geuss
var geussesSoFar; // Stored geusses
var remLives ;          // changed from Lives
var correctGuessCounter;     // Count correct geusses
var spaces;             // Number of spaces in word '-'
var underscores;

function restart() {
	teamToGuess = "";
	guessesSoFar = [];
	underscores = "";
	spaces = "";
	remLives = 10;

	var teamsAvailable = ["Major League Baseball", "National Football League", "National Baseball Association (NBA)"];
			    
	// MLB leagues, divisions and teams
	var leagueMLB = ["American League", "National League"];
	var leagueAmerican = ["AL East", "AL Central", "AL West"];
	var leagueNational = ["NL East", "NL Central", "NL West"];
			   	
	var leagueALEast = ["baltimore orioles", "boston red sox", "new york yankees", "tampa bay rays", "toronto blue jays"];
	var leagueALCentral = ["chicago white sox", "cleveland indians", "detroit tigers", "kansas city royals", "minnesota twins"];
	var leagueALWest = ["houston astros", "los angeles angels", "oakland atheletics", "seattle mariners", "texas rangers"];
	var leagueNLEast = ["atlanta braves", "miami marlins", "new york mets", "philadelphia phillies", "washington nationals"];
	var leagueNLCentral = ["chicago cubs", "cincinnati reds", "milwaukee brewers", "pittsburgh pirates", "st louis cardinals"];
	var leagueNLWest = ["arizona diamondbacks", "colorado rockies", "los angeles dodgers", "san diego padres", "san francisco giants"];

    // NFL leagues, divisions and teams
	var leagueNFL = ["American Football Conference", "National Football Conference"];
	var leagueAFC = ["AFC East", "AFC North", "AFC South", "AFC West"];
	var leagueNFC = ["NFC East", "NFC North", "NFC South", "NFC West"];

	var leagueAFCEast = ["buffalo bills", "miami dolphins", "new england patriots", "new york jets"];
	var leagueAFCNorth = ["baltimore ravens", "cincinnati bengals", "cleveland browns", "pittsburgh steelers"];
	var leagueAFCSouth = ["houston texans", "indianapolis colts", "jacksonville jaguars", "tennessee titans"];
	var leagueAFCWest = ["dever broncos", "kansas city chiefs", "oakland raiders", "san diego chargers"];
	var leagueNFCEast = ["dallas cowboys", "new yok giants", "philadelphia eagles", "washington redskins"];
	var leagueNFCNorth = ["chicago bears", "detroit lions", "lgreen bay packers", "minnesota vikings"];
	var leagueNFCSouth = ["atlanta falcons", "carolina panthers", "new orleans saints", "tampa bay buccaneers"];
	var leagueNFCWest = ["arizona cardinals", "los angeles rams", "san francisco 49ers", "seattle seahawks"];


	 // NBA leagues, divisions and teams
	var leagueNBA = ["Eastern Conference", "Western Conference"];
	var leagueEastern = ["Atlantic", "Central", "Southeast"];
	var leagueWestern = ["Northwest", "Pacific", "Southwest"];

	var leagueAtlantic = ["boston celtics", "brooklyn nets", "new york knicks", "philadelphia 76ers", "toronto raptors"];
	var leagueCentral = ["chicago bulls", "cleveland cavaliers", "detroit pistons", "indiana pacers", "milwaukee bucks"];
	var leagueSoutheast = ["atlanta hawks", "charlotte hornets", "miami heat", "orlando magic", "washington wizards"];
	var leagueNorthwest = ["denver nuggets", "minnesota timberwolves", "oaklahoma city thunder", "portland trail blazers", "utah jazz"];
	var leaguePacific= ["golden state warriors", "los angeles clippers", "los angeles lakers", "phonix suns", "sacramento kings"];
	var leagueSouthwest = ["dallas mavericks", "houston rockets", "memphis grizzlies", "new orleans pelicans", "san antonio spurs"];	 

	finalAnswer = selectCategory(leagueALEast);
	spaces = printBlanks(finalAnswer);

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		guessesSoFar.push(letterPressed);


	}; //closing event key up

} //closing function rest

function selectCategory (passedDivision){
	teamToGuess = passedDivision[Math.floor(Math.random()*passedDivision.length)];
	return teamToGuess;
}

// Play
// var play = function () {document.getElementById('startgame').onclick = function() {
// 	console.log("hello");
			

// 		  	// Get elements
// 		  	var showingCatagory = document.getElementById("CategoryGiven");
// 			var showingLives = document.getElementById("livesLeft");
// 			var showingClue = document.getElementById("hintGiven");
// 			var gettingHint = document.getElementById("getHints");

// 			selectCategory();

			// Select Category
			// function selectCategory (teamsAvailable) {
			//     categoryChosen = teamsAvailable[Math.floor(Math.random() * teamsAvailable.length)];
			//     printBlanks(teamToGuess);

			//     //if MLB is selected
			//     if (categoryChosen ===0){
			//     	conferenceSelected = leagueMLB[Math.floor(Math.random() * leagueMLB.length)];

			//     	//if American League 
			//     	if (conferenceSelected === 0) {
			//     		divisionSelected = leagueAmerican[Math.floor(Math.random() * leagueAmerican.length)];

			//     		//if AL East is selected
			//     		if (divisionSelected ===0) {
			//     			teamToGuess = leagueALEast[Math.floor(Math.random() * leagueALEast.length)];
			//     		}

			//     		//if AL Central is Selected
			//     		else if (divisionSelected ===1) {
			//     			teamToGuess = leagueALCentral[Math.floor(Math.random() * leagueALCentral.length)];
			//     		}

			//     		//if Al Central is Selected
			//     		else if (divisionSelected ===2) {
			//     			teamToGuess = leagueALWest[Math.floor(Math.random() * leagueALWest.length)];
			//     		}
			//     	}

			//     	//if National League 
			//     	if (conferenceSelected === 1) {
			//     		divisionSelected = leagueNational[Math.floor(Math.random() * leagueNational.length)];

			//     		//if NL East is selected
			//     		if (divisionSelected ===0) {
			//     			teamToGuess = leagueNLEast[Math.floor(Math.random() * leagueNLEast.length)];
			//     		}

			//     		//if NL Central is Selected
			//     		else if (divisionSelected ===1) {
			//     			teamToGuess = leagueNLCentral[Math.floor(Math.random() * leagueNLCentral.length)];
			//     		}

			//     		//if Nl Central is Selected
			//     		else if (divisionSelected ===2) {
			//     			teamToGuess = leagueNLWest[Math.floor(Math.random() * leagueNLWest.length)];
			//     		}
			//     	}
			// 	}

			// 	//if NFL is selected
			// 	else if (categoryChosen ===1) {
			// 		conferenceSelected = leagueNFL[Math.floor(Math.random() * leagueNFL.length)];

			// 		//if AFC is selected
			//     	if (conferenceSelected === 0) {
			//     		divisionSelected = leagueAFC[Math.floor(Math.random() * leagueAFC.length)];

			//     		//if AFC East is selected
			//     		if (divisionSelected ===0) {
			//     			teamToGuess = leagueAFCEast[Math.floor(Math.random() * leagueAFCEast.length)];
			//     		}

			//     		//if AFC North is Selected
			//     		else if (divisionSelected ===1) {
			//     			teamToGuess = leagueAFCNorth[Math.floor(Math.random() * leagueAFCNorth.length)];
			//     		}

			//     		//if AFC South is Selected
			//     		else if (divisionSelected ===2) {
			//     			teamToGuess = leagueAFCSouth[Math.floor(Math.random() * leagueAFCSouth.length)];
			//     		}

			//     		//if AFC West is selected
			//     		else if (divisionSelected ===3) {
			//     			teamToGuess = leagueAFCWest[Math.floor(Math.random() * leagueAFCWest.length)];
			//     		}
			//     	}

			//     	//if NFC is selected
			//     	else if (conferenceSelected === 1) {
			//     		divisionSelected = leagueNFC[Math.floor(Math.random() * leagueNFC.length)];

			//     		//if NFC East is selected
			//     		if (divisionSelected ===0) {
			//     			teamToGuess = leagueNFCEast[Math.floor(Math.random() * leagueNFCEast.length)];
			//     		}

			//     		//if NfC North is Selected
			//     		else if (divisionSelected ===1) {
			//     			teamToGuess = leagueNFCNorth[Math.floor(Math.random() * leagueNFCNorth.length)];
			//     		}

			//     		//if NFC South is Selected
			//     		else if (divisionSelected ===2) {
			//     			teamToGuess = leagueNFCSouth[Math.floor(Math.random() * leagueNFCSouth.length)];
			//     		}

			//     		//if NFC West is selected
			//     		else if (divisionSelected ===3) {
			//     			teamToGuess = leagueNFCWest[Math.floor(Math.random() * leagueNFCWest.length)];
			//     		}
			//     	}
			// 	}

			//     //if NBA is selected
			//     if (categoryChosen ===2){
			//     	conferenceSelected = leagueNBA[Math.floor(Math.random() * leagueNBA.length)];

			//     	//if Eastern Conference is selected 
			//     	if (conferenceSelected === 0) {
			//     		divisionSelected = leagueEastern[Math.floor(Math.random() * leagueEastern.length)];

			//     		//if Atlantic division is selected
			//     		if (divisionSelected ===0) {
			//     			teamToGuess = leagueAtlantic[Math.floor(Math.random() * leagueAtlantic.length)];
			//     		}

			//     		//if Cental Divison is Selected
			//     		else if (divisionSelected ===1) {
			//     			teamToGuess = leagueCentral[Math.floor(Math.random() * leagueCentral.length)];
			//     		}

			//     		//if South East divison is Selected
			//     		else if (divisionSelected ===2) {
			//     			teamToGuess = leagueSoutheast[Math.floor(Math.random() * leagueSoutheast.length)];
			//     		}
			//     	}

			//     	//if Western Conference is selected 
			//     	if (conferenceSelected === 0) {
			//     		divisionSelected = leagueWestern[Math.floor(Math.random() * leagueWestern.length)];

			//     		//if Atlantic division is selected
			//     		if (divisionSelected ===0) {
			//     			teamToGuess = leagueNorthwest[Math.floor(Math.random() * leagueNorthwest.length)];
			//     		}

			//     		//if Cental Divison is Selected
			//     		else if (divisionSelected ===1) {
			//     			teamToGuess = leaguePacific[Math.floor(Math.random() * leaguePacific.length)];
			//     		}

			//     		//if South East divison is Selected
			//     		else if (divisionSelected ===2) {
			//     			teamToGuess = leagueSouthwest[Math.floor(Math.random() * leagueSouthwest.length)];
			//     		}
			//     	}
			// 	}	
			// 	console.log(teamToGuess);			
			    
			//     //teamToGuess = teamToGuess.replace(/\s/g, "-");
			// }

		

			//writing _ _ _ for letters
			function printBlanks (teamToGuess) {
				for (var i = 0; i <teamToGuess.length; i++){
					if(i===0){
						underscores = "-";
					}
					else {
						underscores = "-" + underscores;
					}
				}
			}


			//Show Lives--------------------
			

 			//Key press/up function
		   	// document.onkeyup = function(event){
		   	
		   	// 	//Getting user input when they let the key go.
		   	// 	var letterPressed = String.fromCharCode(event.keyCode).toLowerCase();
		    //      letterPressed=letterPressed.toLowerCase();

		   	// 	//push the user guesses to the empty User guess array.
		   	// 	lettersGuessed.push(letterPressed);

		   	// 	//checking if user Won or loss
		   	// 	if(letterPressed === letterToGuess) {
		   	// 		gameOver = true;
		    //         winCount++;
		    //         guessCounter = 10;
		    //         lettersGuessed = [];
		    //         letterIndex = 0;

		   	// 	} 
		   	// 	else if (guessCounter===0) {
		    //            gameOver = true;
		   	// 			lossCount++;
		    //            guessCounter = 10;
		    //            lettersGuessed = [];
		    //            letterIndex = 0;
		   	// 	}

		    //      document.querySelector("#userWins").innerHTML = winCount;
		    //      document.querySelector("#userLosses").innerHTML = lossCount;
		    //      document.querySelector("#userGuess").innerHTML = guessCounter;
		    //      document.querySelector("#guessesSoFar").innerHTML = lettersGuessed.join(", ");

		   	// }; 			

		   	//hints given
		   	//document.getElementById('getHints').onclick = function() {


		   	

			

			    

			    // //console.log(teamToGuess);

			    // geussesSoFar = [ ];
			    // remLives = 10;
			    // correctGuessCounter = 0;
			    // spaces = 0;
			    // selectCategory();
			

  			
  	//}
  	//};