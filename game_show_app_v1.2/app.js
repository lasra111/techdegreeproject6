

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
let phraseRand= getRandomPhraseAsArray(phrases)
  let li = document.createElement('li');
// adds the letters of a string to the display
function addPhraseToDisplay(phraseSplit){
  for (i=0; i<phraseRand.length; i++){
    let phraseSplit=phraseRand.split('')
    let li = document.createElement('li');
    let ul = document.querySelector('#phrase ul');
    li.textContent = phraseSplit[i];
    ul.appendChild(li);
    if (li.textContent===' ') {
      li.className='space';
    }else {
      li.className='letter';
    }

  }
return li;
}
addPhraseToDisplay(phraseRand);

// check if a letter is in the phrase


qwerty.addEventListener('click', (e)=> {
let guess = e.target;
  e.target.className+='chosen';
let results = checkLetter(guess);
  if(results===null){
    missed++;
    let div = document.getElementById('scoreboard')
    let ol = div.children;
    ol.removeChild('li');
  }
});

function checkLetter(guess) {
let checkLetter = document.querySelectorAll('li')
let match = null;
for(i=0; i<checkLetter.length; i++) {
  if(checkLetter[i].textContent===guess.textContent) {
      guess.className+='show';
      match = guess.textContent;
  // if(e.target.className='letter'){
  //   guess[i].className+='show';
  //
  // }
}
return match;

}
}
