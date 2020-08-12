//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

const createManager = [{
  'managerName': "Alex Ferguson"
}, {
  "managerAge": 78
}, {
  "currentTeam": "Manchester FC"
}, {
  'trophiesWon': 27
}];
createManager.length;
return createManager;


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
    return football1[i];
  }
  for (var j = 0; j < football1.length; j++) {
    return football2[j];
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(arr) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].year == 2005) {
      return arr[i].year
    } else {
      arr = [];
      return arr;
    }
  }
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(arr, pos) {
  if (arr.pos == null) {
    arr = [];
    return arr;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].position == pos) {
      return arr[pos].position
    } else {
      arr = [];
      return arr;
    }
  }

}

//Progression 5 - Filter players that have won ______ award
function filterByAward(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].award == ["FIFA", " FIFPro", "World XI"]) {
      return arr[player];
    } else {
      arr = [];
      return arr;
    }
  }
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(arr) {
  if (arr.player == null) {
    arr = [];
    return arr;
  }
  var count;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if ((arr[j].player == ["Best FIFA Men's Player"]) || (arr[i].player == ["African Player of the Year"]) || (arr[i].player == ["PFA Premier League Team of the Year"])) {
        count++;
      }
    }
    if (count == 2) {
      return arr[j].player;
    }
  }
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(arr) {
  if (arr.player == null) {
    arr = [];
    return arr;
  }
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] == ((arr[i].country == "England") && (arr[i].award == "Premier League Golden Boot"))) || (arr[i].country == "France") && (arr[i].award == "French Player of the Year")) {
      return arr[i].player;

    }
  }

  //Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
  function filterByNoOfAwardsTeamAge(arr) {
    if (arr.player == null) {
      arr = [];
      return arr;
    }
    for (var i = 0; i < arr.length; i++) {
      if ((arr[i] == ((arr[i].award != NaN) && (arr[i].age < 40) && (arr[i].country == "Real Madrid")))) {
        return arr[i].player;

      }
    }
  }
  //Progression 9 - Sort players in descending order of their age
  function order(arr) {
    arr.sort(function (a, b) {
      return b.age - a.age;
    })
  }


  //Progression 10 - Sort players beloging to _____ team in descending order of awards won

  //Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

  //Challenge 2 - Sort players that are older than _____ years in alphabetical order
  //Sort the awards won by them in reverse chronological order