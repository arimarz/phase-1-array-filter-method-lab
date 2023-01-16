// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(array, string) {
    // console.log(array);
    // console.log(string);
    // const letter = array.filter(() => includes(string));
    // console.log(letter.i)
    // return letter.i;
    return array.filter(
        (nameArray) => nameArray.toLowerCase() === string.toLowerCase()
)};
    

// filter array of driver's names
// condition- compare each element in array with string(case insensitive)

function fuzzyMatch(array, string) {
    return array.filter(
        (firstLetter) => firstLetter.toLowerCase().indexOf(string.toLowerCase()) === 0 
    );
};
// console.log(fuzzyMatch(drivers, "B"));
function matchName(array, arrayName) {
    return array.filter((banana) => banana.name === arrayName);
    
};
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
console.log(matchName(drivers, "Bobby"));