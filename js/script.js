const raceDropdown = document.getElementById('race-select')
const races = document.querySelectorAll('.race-btns')
const randomDiv = document.getElementById('random')
const dwarfDiv = document.getElementById('dwarf-btns')
const dragonbornDiv = document.getElementById('dragonborn-btns')
const humanDiv = document.getElementById('human-btns')

// ---------------------------------------------------------------------

// raceDropdown.addEventListener('click', () => {
//   var activeClass = raceDropdown.value
//   console.log('Send active class to ' + activeClass)

//   console.log(races)
// })

// ---------------------------------------------------------------------
var active = document.querySelector('.active')

$('#race-select').on('change', function () {
  //   active.classList.remove('active')

  switch (this.value) {
    case 0:
      active.classList.remove('active')
      randomDiv.classList.add('active')
      break
    case 1:
      active.classList.remove('active')
      dwarfDiv.classList.add('active')
      break
    case 2:
      active.classList.remove('active')
      dragonbornDiv.classList.add('active')
      break
    case 3:
      active.classList.remove('active')
      humanDiv.classList.add('active')
      break
    default:
      break
  }
})
