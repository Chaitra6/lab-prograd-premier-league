//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let a = [];
  manager.push(managerName, managerAge, currentTeam, trophiesWon);
  return a;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation) {
  if (formation == []) {
    return null;
  }
  var football1 = [2, 3, 1];
  var football2 = [2, 4, 5];
  for (var i = 0; i < football1.length; i++) {
    formation.push(football1[i]);
  }
  for (var j = 0; j < football1.length; j++) {
    formation.push(football1[i]);
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let year = 2005;
  let arr = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      arr.push(players[i]);
    }

  }
  return arr;

}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos) {
  let arr = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].position == pos) {
      arr.push(players[i]);
    }
  }
  return arr;
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardN) {
  let awardN = "FIFA FIFPro World XI";
  let arr = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].award[j] == awardN) {
        if (!arr.includes(players[i])) {
          arr.push(players[i]);
        }
      }
    }
  }
  if (arr == null) {
    return arr;
  }
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardN) {
  let arr = [];

  var count = 0;
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if ((players[i].award[j] == ["Best FIFA Men's Player"]) || (players[i].award[j] == ["African Player of the Year"]) || (players[i].award[j] == ["PFA Premier League Team of the Year"])) {
        count++;
      }
    }
    if (count == 2) {
      arr.push(players[i]);
      count = 0;
    }

  }
  if (arr == null) {
    return arr;
  }
  return arr;

}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardN, country) {
  let arr = [];

  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if ((players[i].award[j] == awardN) && (player[i].country == country)) {
        if (!arr.includes(players[i])) {
          arr.push(players[i]);
        }
      }
    }
  }
  if (arr == null) {
    return arr;
  }
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsTeamAge(awardN, teamN) {
  var arr = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if ((players[i].award[j] == awardN) && (player[i].team == teamN) && (player[i].age < 40)) {
        if (!arr.includes(players[i])) {
          arr.push(players[i]);
        }
      }
    }
  }
}

//Progression 9 - Sort players in descending order of their age
function order() {
  players.age.sort(function (a, b) {
    return b.age - a.age;
  })
  return players;
}


//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function order(teamN) {
  let arr = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].team == teamN) {
      arr.push(players[i]);
    }
  }
  arr.awards.sort(function (a, b) {
    return b.awards.length - a.awards.length;
  })
  return players;



  players.age.sort(function (a, b) {
    return b.age - a.age;
  })
  return players;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order