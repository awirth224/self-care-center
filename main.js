//querySelectors
submitButton = document.querySelector('.submit')
printMessage = document.querySelector('.print')
img = document.querySelector('img')
radioButtons = document.querySelectorAll('input')
affirmationsButton = document.getElementById('affirm')
mantrasButton = document.getElementById('mantra')
clearButton = document.getElementById('clear-button')

var selectedButton

window.addEventListener('load', disableClearButton)
submitButton.addEventListener('click', displayMessage)
clearButton.addEventListener('click', clearMessage)

//functions
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random()* array.length)
  var message = array[randomIndex]
  return message
}

function checkRadioButtons() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
    selectedButton = radioButtons[i].value
    return
    }
  }
}

function displayMessage() {
    checkRadioButtons()
     if (selectedButton === 'affirmation'){
      printMessage.innerText = getRandomIndex(affirmations)
      enableClearButton()
     } else if (selectedButton === 'mantra'){
      printMessage.innerText = getRandomIndex(mantras)
      enableClearButton()
     }else{
      return
     }
     hideSvg()
}

function hideSvg() {
  img.classList.add('hidden')
}

function clearMessage() {
  checkRadioButtons()
  printMessage.innerText = ''
  img.classList.remove('hidden')
  disableClearButton()
}

function enableClearButton() {
  document.getElementById('clear-button').disabled = false
  clearButton.classList.remove('opacity')
}

function disableClearButton() {
 document.getElementById('clear-button').disabled = true
 clearButton.classList.add('opacity')
}

affirmations = [
"I am successful",
"I am confident",
"I am powerful",
"I am strong",
"I am getting better and better every day",
"All I need is within me right now",
"I wake up motivated",
"I am an unstoppable force of nature",
"I am living with abundance",
"I am having a positive and inspiring impact on the people I come into contact with",
"I am inspiring people through my work",
"Today is a phenomenal day",
"I'm rising above the thoughts that are trying to make me angry or afraid",
"I am filled with focus",
"I am not pushed by my problems; I am led by my dreams",
"I am grateful for everything I have in my life",
"I can be whatever I want to be",
"I am independent and self-sufficient",
"I am not defined by my past; I am driven by my future",
"I use obstacles to motivate me to learn and grow",
"Today will be a productive day",
"I am intelligent and focused",
"I feel more grateful each day",
"Through the power of my thoughts and words, incredible transformations are happening in me and within my life right now",
"I am constantly growing and evolving into a better person",
"I'm freeing myself from all destructive doubt and fear",
"I accept myself for who I am and create peace, power and confidence of mind and of heart",
"I am going to forgive myself and free myself. I deserve to forgive and be forgiven",
"I am healing and strengthening every day",
"I've made it through hard time before, and I've come out stronger and better because of them. I'm going to make it through this.",
"I belong in this world; there are people that care about me and my worth",
"I have made mistakes but I will not let them define me",
"My soul radaiates from the inside and warms the souls of others",
"Note to self: I am going to make you so proud",
"I finish what matters and let go of what does not",
"I feed my spirit. I train my body. I focus my mind. This is my time.",
"My life has meaning. What I do has meaning. My actions are meaningful and inspiring.",
"What I have done today was the best that I was able to do today. And for that, I am thankful"
]

mantras = [
  "My mind is brilliant. My body is healthy. My spirit is tranquil.",
  "I create my own path and walk it with joy",
  "My positive thoughts guide me to new heights",
  "I am conquering my fears and becoming stronger each day",
  "I will have a good day, because it's my choice",
  "I am not afraid to be wrong",
  "My body is a temple. I keep my temple clean",
  "I hold the key to better health through eating better and exercise",
  "Good health is a practice, and I have patience",
  "I listen to my body and give it what it needs",
  "Every cell in my body is alive and beautiful",
  "My potential is limitless, and I choose where to spend my energy",
  "While I support others, I also ask for help when needed",
  "I surrender to the flow and have faith in the ultimate good",
  "I will speak with confidence and self-assurance",
  "My commitment to myself is unbreakable"

]





