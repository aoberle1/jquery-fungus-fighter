$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let currentAttackPoints = 100;
let currentHP = 100;

function onReady() {
    console.log( 'jq' );
    render();
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    $('.arcane-scepter').on( 'click', scepterAttack )
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function render(AP, HP){

    $('.ap-text').text(currentAttackPoints)
}

function scepterAttack(event){
    event.preventDefault();
    console.log( currentAttackPoints );
    currentAttackPoints -= 14;


    render();
}
