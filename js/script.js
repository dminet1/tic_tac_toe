	/*---------------*/
	/* Players names */
	/*---------------*/
	var joueur1 = document.getElementById('joueur1');
	var joueur2 = document.getElementById('joueur2');

	/*------------------*/
	/* Global Variables */
	/*------------------*/
	var painted;
	var content;
	var winningCombinations;
	var turn = 0;
	var theCanvas;
	var c;
	var cxt;
	var squaresFilled = 0;
	var w;
	var y;

	var tour = 0;
	var laCase;
	var cc;
	var ct;
	var casesRemplies = 0;
	var replay;

	/*--------------------*/
	/* Instanciate Arrays */
	/*--------------------*/
	window.onload=function(){

	    painted = new Array();
	    content = new Array();
	    winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	    for(var l = 0; l <= 8; l++){
	    painted[l] = false;
	    content[l]='';
	    }
	}

	/*--------------------------*/
	/* Game methods with canvas */
	/*--------------------------*/
	function canvasClicked(canvasNumber){
	    theCanvas = "canvas"+canvasNumber;
	    c = document.getElementById(theCanvas);
			cxt = c.getContext("2d");

	    if(painted[canvasNumber-1] ==false){
	        if(turn%2==0){
	            cxt.beginPath();
	            cxt.moveTo(10,10);
	            cxt.lineTo(40,40);
	            cxt.moveTo(40,10);
	            cxt.lineTo(10,40);
	            cxt.stroke();
	            cxt.closePath();
	            content[canvasNumber-1] = 'X';
							document.getElementById(theCanvas).style.backgroundColor = "red";
	        }

	        else{
	            cxt.beginPath();
	            cxt.arc(25,25,20,0,Math.PI*2,true);
	            cxt.stroke();
	            cxt.closePath();
	            content[canvasNumber-1] = 'O';
							document.getElementById(theCanvas).style.backgroundColor = "green";
	        }


	        turn++;
	        painted[canvasNumber-1] = true;
	        squaresFilled++;
	        checkForWinners(content[canvasNumber-1]);

	        if(squaresFilled==9){
	            alert("Fin de la partie !");
	            location.reload(true);
	        }

	    }
	    else{
	        alert("Cette case a déjà été jouée !");
	    }

			reset_button.onclick = reset;
	}

	/*----------------------------------*/
	/* Game methods with div and target */
	/*----------------------------------*/
	function myFunction(event) {
			laCase = event.target.id;
			/*alert("laCase = " + laCase);*/
			switch (laCase) {
				case "x1y1":
					caseNumero = 1
					break;
				case "x2y1":
					caseNumero = 2
					break;
				case "x3y1":
					caseNumero = 3
					break;
				case "x1y2":
					caseNumero = 4
					break;
				case "x2y2":
					caseNumero = 5
					break;
				case "x3y2":
					caseNumero = 6
					break;
				case "x1y3":
					caseNumero = 7
					break;
				case "x2y3":
					caseNumero = 8
					break;
				case "x3y3":
					caseNumero = 9
					break;
				default:
				alert("Vous n'avez pas joué !");
			}

			cc = document.getElementById(laCase);

	    if(painted[caseNumero-1] ==false){
					/*alert("tour = " + tour)*/
					if(tour%2==0){
							/*alert("tour pair")*/
							content[caseNumero-1] = 'X';
							document.getElementById(laCase).style.backgroundColor = "red";
							document.getElementById(laCase).className = 'player1';
	        }

	        else{
							/*alert("tour impair")*/
							content[caseNumero-1] = 'O';
							document.getElementById(laCase).style.backgroundColor = "green";
							document.getElementById(laCase).className = 'player2';
	        }


	        tour++;
	        painted[caseNumero-1] = true;
	        casesRemplies++;
	        checkForWinners(content[caseNumero-1]);

	        if(casesRemplies==9){
	            alert("Fin de la partie !");
	            location.reload(true);
	        }

	    }
	    else{
	        alert("Cette case a déjà été jouée !");
	    }
			reset_button.onclick = reset;
	}

	function checkForWinners(symbol){
		for(var a = 0; a < winningCombinations.length; a++){
			if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){
				if(symbol == 'X') {
							alert("joueur 1 " + joueur1.value + " gagne !");
								} else {
							alert("joueur 2 " + joueur2.value + " gagne !");
				}
				playAgain();
			}
		}
	}

	function playAgain(){
		y=confirm("Rejouer ?");
		if(y==true){
			alert("A vos marques !");
			location.reload(true);
		}
		else{
			alert("Sortie de jeu !");
		}
	}

	function reset() {
			location.reload(true);
	}

	/*function refresh() {
		document.getElementById('x1y1').className = none;
		document.getElementById('x2y1').className = none;
		document.getElementById('x3y1').className = none;
		document.getElementById('x1y2').className = none;
		document.getElementById('x2y2').className = none;
		document.getElementById('x3y2').className = none;
		document.getElementById('x1y3').className = none;
		document.getElementById('x2y3').className = none;
		document.getElementById('x3y3').className = none;
	}*/
