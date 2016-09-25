Politician = function(name, partyColor) 
{
    this.name = name; 
    this.electionResults = null;
    this.totalVotes = 0;
    this.partyColor = partyColor;

    this.tallyUpTotalVotes = function()
    {

      for (var i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes += this.electionResults[i];
      }
    };

};

var candidate1 = new Politician("Leanne Rosedale",[132, 17, 11]);
var candidate2 = new Politician("Persephone Lyre",[245, 141, 136] ); 


candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];


// Recount - some changes
candidate1.electionResults[9] = 1;
candidate2.electionResults[9] = 28;

candidate1.electionResults[4] = 17;
candidate2.electionResults[4] = 38;

candidate1.electionResults[43] = 11;
candidate2.electionResults[43] = 27;

//console.log(candidate1.electionResults);
//console.log(candidate2.electionResults);

var setStateResults = function(state)
{
     if (candidate2.electionResults[state] > candidate1.electionResults[state])
     {
         theStates[state].winner = candidate2;
     }
     else if (candidate2.electionResults[state] < candidate1.electionResults[state])
     {
         theStates[state].winner = candidate1;
     }

     var stateWinner = theStates[state].winner;

     if (stateWinner !== null)
     {
        theStates[state].rgbColor = stateWinner.partyColor;
     }
     else
     {
        theStates[state].rgbColor = [11,32,57];
    } 

  // Populate Header Table 

    // make it easier to drill down
    var header = document.getElementById("countryResults").children[0].children[0];
    var name1 = header.children[0];
    name1.innerText = candidate1.name;

    var results1 = header.children[1];
    results1.innerText = candidate1.totalVotes;

    var name2 = header.children[2];
    name2.innerText = candidate2.name;

    var results2 = header.children[3];
    results2.innerText = candidate2.totalVotes;

    var winnerTable = header.children[5];
    winnerTable.innerText = winner;

    // Populate Lower Right State Table 
    var stateName = header.children[0];
    var stateName = document.getElementById("stateResults").children[0].children[0].children[0];
    stateName.innerText = theStates[state].nameFull;
    var stateAbbrev = document.getElementById("stateResults").children[0].children[0].children[1];
    stateAbbrev.innerText = theStates[state].nameAbbrev;

    var candidates = document.getElementById("stateResults").children[1];

    candidates.children[0].children[0].innerText = candidate1.name;
    candidates.children[0].children[1].innerText = candidate1.electionResults[state];
    candidates.children[1].children[0].innerText = candidate2.name;
    candidates.children[1].children[1].innerText = candidate2.electionResults[state];
    if (stateWinner != null){
      candidates.children[2].children[1].innerText = stateWinner.name;
    }
    else {
      candidates.children[2].children[1].innerText = "It's a tie!!!";
    }

    console.log(theStates[0].fullName);
};

candidate1.tallyUpTotalVotes();
candidate2.tallyUpTotalVotes();

console.log(candidate1.totalVotes);
console.log(candidate2.totalVotes);

console.log("Leanne's color is: " + candidate1.partyColor);
console.log("Persephone's color is: " + candidate2.partyColor);

var winner = "";

    if (candidate1.totalVotes > candidate2.totalVotes)
    {
        winner = candidate1.name;
    }
    else if (candidate1.totalVotes < candidate2.totalVotes)
    {
        winner = candidate2.name;
    }
    else
    {
         winner = "It's a tie - gods help us all."
    }

    console.log("AND THE WINNER IS..." + winner + "!!!"); 