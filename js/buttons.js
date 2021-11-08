// Bring in elements from DOM
const randomNpcBtn = document.getElementById('new-npc-btn')
const cardContainer = document.getElementById('card-container')
const newDwarf = document.getElementById('new-dwarf')
const newDwarfMale = document.getElementById('new-dwarf-male')
const newDwarfFemale = document.getElementById('new-dwarf-female')
const newDragonborn = document.getElementById('new-dragonborn')
const newDragonbornFemale = document.getElementById('new-dragonborn-female')
const newDragonbornMale = document.getElementById('new-dragonborn-male')
const newTiefling = document.getElementById('new-tiefling')
const newTieflingFemale = document.getElementById('new-tiefling-female')
const newTieflingMale = document.getElementById('new-tiefling-male')

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

// Dwarf buttons --------------------------------------------------------------------

// Dwarves all
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

// Dragonborn buttons ------------------------------------------------------------

// Dragonborn all
newDragonborn.addEventListener('click', () => {
  console.log('Button clicked')
  createDragonborn()
})

function createDragonborn() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(dragonbornClan)
  let dragonbornName = shuffle(dragonbornNamesAll)
  let color = shuffle(dragonbornColor)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${dragonbornName} ${clan}</h4>
              <h4>Race: ${color} Dragonborn</h4>
              <h4>Trait: ${trait}</h4>
           </div>
       `
}

// Dragonborn Male

newDragonbornMale.addEventListener('click', () => {
  console.log('Button clicked')
  createDragonbornMale()
})

function createDragonbornMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(dragonbornClan)
  let dragonbornName = shuffle(dragonbornNamesMale)
  let color = shuffle(dragonbornColor)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${dragonbornName} ${clan}</h4>
              <h4>Race: ${color} Dragonborn</h4>
              <h4>Trait: ${trait}</h4>
           </div>
       `
}

// Dragonborn Female

newDragonbornFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createDragonbornFemale()
})

function createDragonbornFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(dragonbornClan)
  let dragonbornName = shuffle(dragonbornNamesFemale)
  let color = shuffle(dragonbornColor)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${dragonbornName} ${clan}</h4>
              <h4>Race: ${color} Dragonborn</h4>
              <h4>Trait: ${trait}</h4>
           </div>
       `
}

// --------------------------------------------------------------------------------------

// Tieflings

// Tiefling All

newTiefling.addEventListener('click', () => {
  console.log('Button clicked')
  createTiefling()
})

function createTiefling() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let virtue = shuffle(tieflingVirtue)
  let tieflingName = shuffle(tieflingNamesAll)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${tieflingName} ${virtue}</h4>
              <h4>Race: Tiefling</h4>
              <h4>Trait: ${trait}</h4>
           </div>
       `
}

// Tiefling Female

newTieflingFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createTieflingFemale()
})

function createTieflingFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let virtue = shuffle(tieflingVirtue)
  let tieflingName = shuffle(tieflingNamesFemale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${tieflingName} ${virtue}</h4>
              <h4>Race: Tiefling</h4>
              <h4>Trait: ${trait}</h4>
           </div>
       `
}

// Tiefling Male

newTieflingMale.addEventListener('click', () => {
  console.log('Button clicked')
  createTieflingMale()
})

function createTieflingMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let virtue = shuffle(tieflingVirtue)
  let tieflingName = shuffle(tieflingNamesMale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name: ${tieflingName} ${virtue}</h4>
              <h4>Race: Tiefling</h4>
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
