// Bring in elements from DOM
const randomNpcBtn = document.getElementById('new-npc-btn')
const cardContainer = document.getElementById('card-container')
const newDwarf = document.getElementById('new-dwarf')
const newDwarfMale = document.getElementById('new-dwarf-male')
const newDwarfFemale = document.getElementById('new-dwarf-female')

// When button is clicked, generate a card with three random values
randomNpcBtn.addEventListener('click', () => {
  console.log('Button clicked')
  createRandomNpc()
})

randomNpcBtn.addEventListener('click', () => {
  console.log('Button clicked')
  createRandomNpc()
})

// Function to create card
function createRandomNpc() {
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
// Dwarves All
newDwarf.addEventListener('click', () => {
  console.log('Button clicked')
  createDwarf()
})

function createDwarf() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(dwarfClan)
  let dwarfName = shuffle(dwarfNamesAll)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${dwarfName} ${clan}</h4>
              <h4>Race: Dwarf</h4>
              <h4>Trait: ${trait}</h4>
           </div>
       `
}

// Dwarves Male
newDwarfMale.addEventListener('click', () => {
  console.log('Button clicked')
  createDwarfMale()
})

function createDwarfMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(dwarfClan)
  let dwarfName = shuffle(dwarfNamesMale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${dwarfName} ${clan}</h4>
              <h4>Race: Dwarf</h4>
              <h4>Trait: ${trait}</h4>
           </div>
       `
}

// Dwarves Female
newDwarfFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createDwarfFemale()
})

// Function to create card
function createDwarfFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(dwarfClan)
  let dwarfName = shuffle(dwarfNamesFemale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${dwarfName} ${clan}</h4>
              <h4>Race: Dwarf</h4>
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
