// Bring in elements from DOM
const randomNpcBtn = document.getElementById('new-npc-btn')
const cardContainer = document.getElementById('random-npc-card')

// Bring in JSON file
let npcs = [
    {
        "index": 0,
        "firstname": "Bron",
        "secondname": "Strongdong",
        "race": "Dwarf",
        "trait": "Loud" 
    },
    {
        "index": 1,
        "firstname": "Barry",
        "secondname": "Smitherton",
        "race": "Human",
        "trait": "Shy" 
    },
    {
        "index": 2,
        "firstname": "Erathar",
        "secondname": "Cerebrim",
        "race": "Elf",
        "trait": "Rude" 
    },
    {
        "index": 3,
        "firstname": "Benbin",
        "secondname": "Quietfoot",
        "race": "Halfling",
        "trait": "Nervous" 
    },
    {
        "index": 4,
        "firstname": "Daisy",
        "secondname": "Littlecurl",
        "race": "Gnome",
        "trait": "Clumsy" 
    },
    
] 

// When button is clicked, generate a card with three random values
randomNpcBtn.addEventListener('click' , () => {
    console.log('Button clicked');
    createRandomNpc()
    
})

// Function to create card
function createRandomNpc() {

    // Generate random number
    let r = Math.floor((Math.random()) * npcs.length);
    console.log('NPC number '+ r + ' was chosen');

    // Clear card container div
    cardContainer.innerHTML = "";

    let npc = npcs[r]
    console.log(npc);

    // Insert new card div
    cardContainer.innerHTML = `
        <div class="card">
            <h4>Name: ${npc.firstname} ${npc.secondname}</h4>
            <h4>Race: ${npc.race}</h4>
            <h4>Trait: ${npc.trait}</h4>
        </div>
    `

    
}

