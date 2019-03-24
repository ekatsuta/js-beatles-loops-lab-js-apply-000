// add solution here
function theBeatlesPlay(musicians, instruments) {
  let anArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    anArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return anArray;
}

// function johnLennonFacts(facts){
//   let newFactsArray = [];
  
//   while (facts.length) {
//     newFactsArray.push(facts[0]);
//     facts.slice(1);
//   }
  
//   return newFactsArray;
// }

// function iLoveTheBeatles(num) {
//   let anArray = [];
  
//   do {anArray.push("I love the Beatles!"); num ++}
//   while (num < 15)
  
//   return anArray;
// }