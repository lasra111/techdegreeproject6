

let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let button = document.getElementsByClassName('btn__reset');
let missed = 0;
let start = document.getElementsByClassName('start');
let overlay = document.getElementById('overlay')
let letter = document.getElementsByClassName('letter');
let show = document.getElementsByClassName('show');
let phrases = [
  'veni vidi vici',
  'what is the worst that can happen',
  'violence never settles anything',
  'there is nothing impossible to those who will try',
  'thank god it is almost the weekend'
];

overlay.addEventListener('click', (e)=> {
  if(e.target.className==='btn__reset'){
for(let i=0; i<start.length; i++){
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
  for (let i=0; i<phraseRand.length; i++){
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
if (e.target.tagName === "BUTTON") {
let guess = e.target;
guess.disabled='true';
let letterFound = checkLetter(guess);
e.target.className='chosen';
  if(letterFound===null){
    missed++;
    }
    if(missed===1){
      replaceHeart1()
    }else if(missed===2){
      replaceHeart2()
    }else if(missed===3){
      replaceHeart3()
    }else if(missed===4){
      replaceHeart4()
    }else if(missed>=5){
      overlay.style.display='flex';
      overlay.className='lose'
      overlay.textContent='You lost!';
    }
  if(letter.length===show.length){
    overlay.style.display='flex';
    overlay.className='win';
    overlay.textContent='Congratulations! You won!';
}

}
});

function checkLetter(guess) {
let checkLetter = document.getElementsByClassName('letter')
let match = null;
for(let i=0; i<checkLetter.length; i++) {
  if(checkLetter[i].textContent.toLowerCase()===guess.textContent.toLowerCase()) {
      checkLetter[i].classList.add('show');
      match = guess.textContent;
  // if(e.target.className='letter'){
  //   guess[i].className+='show';
  //
  // }
}


}
return match;
}
function replaceHeart1() {
  let img1 = document.getElementById('img1');
  img1.src="images/lostHeart.png"
}
function replaceHeart2() {
  let img2 = document.getElementById('img2');
  img2.src="images/lostHeart.png"
}
function replaceHeart3() {
  let img3 = document.getElementById('img3');
  img3.src="images/lostHeart.png"
}
function replaceHeart4() {
  let img4 = document.getElementById('img4');
  img4.src="images/lostHeart.png"
}
function replaceHeart5() {
  let img5 = document.getElementById('img5');
  img5.src="images/lostHeart.png"
}
