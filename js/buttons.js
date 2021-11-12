// Bring in elements from DOM
const randomNpc = document.getElementById('new-npc-btn')
const randomNpcMale = document.getElementById('new-npc-btn-male')
const randomNpcFemale = document.getElementById('new-npc-btn-female')
const cardContainer = document.getElementById('card-container')

// Random buttons -----------------------------------------------------------------------

randomNpc.addEventListener('click', () => {
  let r = Math.floor(Math.random() * randomArr.length)
  randomArr[r]()
})

randomNpcMale.addEventListener('click', () => {
  let r = Math.floor(Math.random() * randomArr.length)
  randomArrMale[r]()
})

randomNpcFemale.addEventListener('click', () => {
  let r = Math.floor(Math.random() * randomArr.length)
  randomArrFemale[r]()
})

// Barovian ------------------------------------------------------------------------BarBarovian--

const newBarovian = document.getElementById('new-barovian')
const newBarovianMale = document.getElementById('new-barovian-male')
const newBarovianFemale = document.getElementById('new-barovian-female')

// Barovian all

newBarovian.addEventListener('click', () => {
  console.log('Button clicked')
  createBarovian()
})

function createBarovian() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(barovianNamesAll)
  let firstName = shuffle(barovianNamesAll)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${firstName} ${lastName}</span></h4>
              <h4>Race:<span> Barovian</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Barovian Female

newBarovianFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createBarovianFemale()
})

function createBarovianFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(barovianNamesAll)
  let firstName = shuffle(barovianNamesFemale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
  <div class="card">
    <h4>Name:<span> ${firstName} ${lastName}</span></h4>
    <h4>Race:<span> Barovian</span></h4>
    <h4>Trait:<span> ${trait}</span></h4>
  </div>
`
}

// Barovian Male

newBarovianMale.addEventListener('click', () => {
  console.log('Button clicked')
  createBarovianMale()
})

function createBarovianMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(barovianNamesAll)
  let firstName = shuffle(barovianNamesMale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
  <div class="card">
  <h4>Name:<span> ${firstName} ${lastName}</span></h4>
  <h4>Race:<span> Barovian</span></h4>
  <h4>Trait:<span> ${trait}</span></h4>
</div>
`
}

// Dwarf buttons --------------------------------------------------------------------

const newDwarf = document.getElementById('new-dwarf')
const newDwarfMale = document.getElementById('new-dwarf-male')
const newDwarfFemale = document.getElementById('new-dwarf-female')

// Dwarves all
newDwarf.addEventListener('click', () => {
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
              <h4>Name:<span> ${dwarfName} ${clan}</span></h4>
              <h4>Race:<span> Dwarf</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
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
              <h4>Name:<span> ${dwarfName} ${clan}</span></h4>
              <h4>Race:<span> Dwarf</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
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
              <h4>Name:<span> ${dwarfName} ${clan}</span></h4>
              <h4>Race:<span> Dwarf</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Dragonborn buttons ------------------------------------------------------------

const newDragonborn = document.getElementById('new-dragonborn')
const newDragonbornFemale = document.getElementById('new-dragonborn-female')
const newDragonbornMale = document.getElementById('new-dragonborn-male')

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
              <h4>Name:<span> ${dragonbornName} ${clan}</span></h4>
              <h4>Race:<span> ${color} Dragonborn</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
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
              <h4>Name:<span> ${dragonbornName} ${clan}</span></h4>
              <h4>Race:<span> ${color} Dragonborn</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
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
              <h4>Name:<span> ${dragonbornName} ${clan}</span></h4>
              <h4>Race:<span> ${color} Dragonborn</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Elf -------------------------------------------------------------------------------

const newElf = document.getElementById('new-elf')
const newElfMale = document.getElementById('new-elf-male')
const newElfFemale = document.getElementById('new-elf-female')

// Elf all

newElf.addEventListener('click', () => {
  console.log('Button clicked')
  createElf()
})

function createElf() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(elfClan)
  let firstName = shuffle(elfNamesAll)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${firstName} ${lastName}</span></h4>
              <h4>Race:<span> Elf</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Elf Female

newElfFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createElfFemale()
})

function createElfFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(elfClan)
  let firstName = shuffle(elfNamesFemale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
  <div class="card">
    <h4>Name:<span> ${firstName} ${lastName}</span></h4>
    <h4>Race:<span> Elf</span></h4>
    <h4>Trait:<span> ${trait}</span></h4>
  </div>
`
}

// Elf Male

newElfMale.addEventListener('click', () => {
  console.log('Button clicked')
  createElfMale()
})

function createElfMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(elfNamesAll)
  let firstName = shuffle(elfNamesMale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
  <div class="card">
  <h4>Name:<span> ${firstName} ${lastName}</span></h4>
  <h4>Race:<span> Elf</span></h4>
  <h4>Trait:<span> ${trait}</span></h4>
</div>
`
}

// Gnome buttons --------------------------------------------------------------------

const newGnome = document.getElementById('new-gnome')
const newGnomeMale = document.getElementById('new-gnome-male')
const newGnomeFemale = document.getElementById('new-gnome-female')

// Gnomes all
newGnome.addEventListener('click', () => {
  createGnome()
})

function createGnome() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(gnomeClan)
  let gnomeName = shuffle(gnomeNamesAll)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${gnomeName} ${clan}</span></h4>
              <h4>Race:<span> Gnome</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Gnome Male
newGnomeMale.addEventListener('click', () => {
  console.log('Button clicked')
  createGnomeMale()
})

function createGnomeMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(gnomeClan)
  let gnomeName = shuffle(gnomeNamesMale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${gnomeName} ${clan}</span></h4>
              <h4>Race:<span> Gnome</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Gnome Female
newGnomeFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createGnomeFemale()
})

function createGnomeFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(gnomeClan)
  let gnomeName = shuffle(gnomeNamesFemale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${gnomeName} ${clan}</span></h4>
              <h4>Race:<span> Gnome</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Halfling buttons --------------------------------------------------------------------

const newHalfling = document.getElementById('new-halfling')
const newHalflingMale = document.getElementById('new-halfling-male')
const newHalflingFemale = document.getElementById('new-halfling-female')

// Halflings all
newHalfling.addEventListener('click', () => {
  createHalfling()
})

function createHalfling() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(halflingClan)
  let halflingName = shuffle(halflingNamesAll)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${halflingName} ${clan}</span></h4>
              <h4>Race:<span> Halfling</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Halfling Male
newHalflingMale.addEventListener('click', () => {
  console.log('Button clicked')
  createHalflingMale()
})

function createHalflingMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(halflingClan)
  let halflingName = shuffle(halflingNamesMale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${halflingName} ${clan}</span></h4>
              <h4>Race:<span> Halfling</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Halfling Female
newHalflingFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createHalflingFemale()
})

function createHalflingFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let clan = shuffle(halflingClan)
  let halflingName = shuffle(halflingNamesFemale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${halflingName} ${clan}</span></h4>
              <h4>Race:<span> Halfling</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Half-Orc buttons --------------------------------------------------------------------

const newHalfOrc = document.getElementById('new-halforc')
const newHalfOrcMale = document.getElementById('new-halforc-male')
const newHalfOrcFemale = document.getElementById('new-halforc-female')

// Half-Orc all
newHalfOrc.addEventListener('click', () => {
  createHalfOrc()
})

function createHalfOrc() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let halforcName = shuffle(halforcNamesAll)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${halforcName}</span></h4>
              <h4>Race:<span> Half-Orc</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Half-Orc Male
newHalfOrcMale.addEventListener('click', () => {
  console.log('Button clicked')
  createHalfOrcMale()
})

function createHalfOrcMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let halforcName = shuffle(halforcNamesMale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${halforcName}</span></h4>
              <h4>Race:<span> Half-Orc</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Half-Orc Female
newHalfOrcFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createHalfOrcFemale()
})

function createHalfOrcFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let halforcName = shuffle(halforcNamesFemale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${halforcName}</span> </h4>
              <h4>Race:<span> Half-Orc</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Humans -------------------------------------------------------------------------------

const newHuman = document.getElementById('new-human')
const newHumanMale = document.getElementById('new-human-male')
const newHumanFemale = document.getElementById('new-human-female')

// Human all

newHuman.addEventListener('click', () => {
  console.log('Button clicked')
  createHuman()
})

function createHuman() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(humanNamesAll)
  let firstName = shuffle(humanNamesAll)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
           <div class="card">
              <h4>Name:<span> ${firstName} ${lastName}</span></h4>
              <h4>Race:<span> Human</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
           </div>
       `
}

// Human Female

newHumanFemale.addEventListener('click', () => {
  console.log('Button clicked')
  createHumanFemale()
})

function createHumanFemale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(humanNamesAll)
  let firstName = shuffle(humanNamesFemale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
  <div class="card">
    <h4>Name:<span> ${firstName} ${lastName}</span></h4>
    <h4>Race:<span> Human</span></h4>
    <h4>Trait:<span> ${trait}</span></h4>
  </div>
`
}

// Human Male

newHumanMale.addEventListener('click', () => {
  console.log('Button clicked')
  createHumanMale()
})

function createHumanMale() {
  // Clear card container div
  cardContainer.innerHTML = ''

  let lastName = shuffle(humanNamesAll)
  let firstName = shuffle(humanNamesMale)
  let trait = shuffle(npcTraits)

  //  Insert new card div
  cardContainer.innerHTML = `
  <div class="card">
  <h4>Name:<span> ${firstName} ${lastName}</span></h4>
  <h4>Race:<span> Human</span></h4>
  <h4>Trait:<span> ${trait}</span></h4>
</div>
`
}

// Tieflings -----------------------------------------------------------------------

const newTiefling = document.getElementById('new-tiefling')
const newTieflingFemale = document.getElementById('new-tiefling-female')
const newTieflingMale = document.getElementById('new-tiefling-male')

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
              <h4>Name:<span> ${tieflingName} ${virtue}</span></h4>
              <h4>Race:<span> Tiefling</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
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
              <h4>Name:<span> ${tieflingName} ${virtue}</span></h4>
              <h4>Race:<span> Tiefling</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
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
              <h4>Name:<span> ${tieflingName} ${virtue}</span></h4>
              <h4>Race:<span> Tiefling</span></h4>
              <h4>Trait:<span> ${trait}</span></h4>
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
