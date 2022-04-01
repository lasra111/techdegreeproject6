

let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let button = document.getElementsByClassName('btn__reset');
let missed = 0;
let start = document.getElementsByClassName('start');
let overlay = document.getElementById('overlay')

let phrases = [
  'veni vidi vici',
  'what is the worst that can happen',
  'violence never settles anything',
  'there is nothing impossible to those who will try',
  'thank god it is almost the weekend'
];

overlay.addEventListener('click', (e)=> {
  if(e.target.className==='btn__reset'){
for(i=0; i<start.length; i++){
  start[i].style.display='none';
}
}
});

function randomNumber() {
  let getRand = Math.floor((Math.random()*5));
  return getRand;
}
// return a random phrase from the array
function getRandomPhraseAsArray(arr){
let randomPhrase = arr[randomNumber()];
return randomPhrase;
}
let phraseSplit= getRandomPhraseAsArray(phrases).split(' ')
// adds the letters of a string to the display
function addPhraseToDisplay(phraseSplit){
  for (i=0; i<phraseSplit.length; i++){
    let li = document.createElement('li');
    let ul = document.querySelector('#phrase ul');
    li.appendChild(phraseSplit[i]);
    ul.appendChild(li);
    if (phraseSplit[i] ===/[a-z]/) {
      li.className='letter';
    }
return ul;
  }

}
let phraseArray = getRandomPhraseAsArray(phrases);

console.log(addPhraseToDisplay(phraseArray));
