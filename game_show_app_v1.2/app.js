document.addEventListener('DOMContentLoaded', ()=> {

let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let button = document.getElementsByClassName('btn__reset');
let missed = 0;
let start = document.getElementsByClassName('start');
let overlay = document.getElementById('overlay')
let randomNumber = Math.floor((Math.rand()*5)+1);
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

// return a random phrase from the array
let getRandomPhraseAsArray = arr=> {


}










































});
