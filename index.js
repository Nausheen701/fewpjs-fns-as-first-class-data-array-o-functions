var wakeDog = function(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

// var wakeDog = function(dogName="Byron", dogBreed="poodle") {
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//     return `Wake ${dogName} the ${dogBreed}`
//   }

// function wakeDog(dogName, dogBreed) {
//     console.log("Wake ${dogName} the ${dogBreed}");
//     return "Wake ${dogName} the ${dogBreed}"
//   }

var leashDog = function(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }

function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }

function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }

function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
  }

  function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }

  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

  function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
  }



//   const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
// array.forEach(function (item, index) {
//   console.log(item, index);
// })

// var routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
// var arrayLength = routine.length;
// const exercises = []
// for (var i = 0; i < arrayLength; i++) {
//     console.log(routine[i]);
//     exercises.push(exercise)
// }