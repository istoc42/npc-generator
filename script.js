// Bring in elements from DOM
const randomNpcBtn = document.getElementById('new-npc-btn')
const cardContainer = document.getElementById('random-npc-card')

// Bring in JSON file
let npcs = [
  {
    index: 0,
    firstname: 'Bron',
    secondname: 'Strongdong',
    race: 'Dwarf',
    trait: 'Loud',
  },
  {
    index: 1,
    firstname: 'Barry',
    secondname: 'Smitherton',
    race: 'Human',
    trait: 'Shy',
  },
  {
    index: 2,
    firstname: 'Erathar',
    secondname: 'Cerebrim',
    race: 'Elf',
    trait: 'Rude',
  },
  {
    index: 3,
    firstname: 'Benbin',
    secondname: 'Quietfoot',
    race: 'Halfling',
    trait: 'Nervous',
  },
  {
    index: 4,
    firstname: 'Daisy',
    secondname: 'Littlecurl',
    race: 'Gnome',
    trait: 'Clumsy',
  },
]

let npcTraits = [
  'Loud',
  'Shy',
  'Clumsy',
  'Rude',
  'Nervous',
  'Cowardly',
  'Bold',
  'Humble',
  'Serious',
  'Stubborn',
  'Gullible',
  'Generous',
  'Selfish',
  'Confident',
  'Respectful',
  'Considerate',
  'Independent',
  'Carefree',
  'Intelligent',
  'Mischievous',
  'Hardworking',
  'Charming',
  'Lazy',
  'Responsible',
  'Helpful',
  'Cautious',
  'Polite',
  'Conceited',
  'Demanding',
  'Bossy',
  'Proud',
  'Gentle',
  'Mysterious',
  'Eager',
  'Hopeful',
  'Lucky',
  'Cooperative',
  'Ambitious',
  'Curious',
  'Mature',
  'Calm',
  'Energetic',
  'Calm',
  'Strict',
  'Annoyed',
  'Foolish',
  'Grumpy',
  'Miserable',
  'Sly',
  'Thoughtful',
  'Tolerant',
  'Weak',
  'Wise',
  'Jealous',
  'Lonely',
]

// When button is clicked, generate a card with three random values
randomNpcBtn.addEventListener('click', () => {
  console.log('Button clicked')
  createRandomNpc()
})

// Function to create card
function createRandomNpc() {
  //   let r = Math.floor(Math.random() * npcs.length)
  //   console.log('NPC number ' + r + ' was chosen')

  //   let t = Math.floor(Math.random() * npcTraits.length)
  //   console.log('Trait: ' + npcTraits[t])

  // Generate random numbers
  console.log(shuffle(npcTraits))

  // Clear card container div
  cardContainer.innerHTML = ''

  let npc = shuffle(npcs)

  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
               <h4>Name: ${npc.firstname} ${npc.secondname}</h4>
              <h4>Race: ${npc.race}</h4>
              <h4>Trait: ${trait}</h4>
           </div>
       `
}

// Function to pick random non-repeating value from array
function shuffle(x) {
  var i = x.length,
    j = 0,
    temp

  while (i--) {
    j = Math.floor(Math.random() * (i + 1))

    // swap randomly chosen element with current element
    temp = x[i]
    x[i] = x[j]
    x[j] = temp
  }

  return temp
}
