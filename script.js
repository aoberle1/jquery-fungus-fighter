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
    
    // registering event handlers for button clicks
    $('.arcane-scepter').on( 'click', scepterAttack )
    $('.entangle').on( 'click', entangleAttack )
    $('.dragon-blade').on( 'click', dragonBladeAttack )
    $('.star-fire').on( 'click', starFireAttack )

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function render(){

    // setting the value of these elements to these variables
    $('.ap-text').text(currentAttackPoints)
    $('.hp-text').text(currentHP)

    // if statement setup
    if( currentHP <= 0 ){
        // adds class freaky-fungus dead
        $('.enemy').addClass('freaky-fungus dead')
        //removes class freaky-fungus walk completely (removes it from itself)
        $('.freaky-fungus.walk').removeClass('freaky-fungus walk')
    }

    if (currentAttackPoints <= 0){
        $('.enemy').addClass('freaky-fungus jump')
        $('.freaky-fungus.walk').removeClass('freaky-fungus walk')
    }
}

function scepterAttack(event){
    event.preventDefault();
    console.log( currentAttackPoints );
    currentAttackPoints -= 12;
    currentHP -= 14;
    render();
}

function entangleAttack(event){
    event.preventDefault();
    console.log( currentAttackPoints );
    currentAttackPoints -= 23;
    currentHP -= 9;
    render();
}

function dragonBladeAttack(event){
    event.preventDefault();
    console.log( currentAttackPoints );
    currentAttackPoints -= 38;
    currentHP -= 47;
    render();
}

function starFireAttack(event){
    event.preventDefault();
    console.log( currentAttackPoints );
    currentAttackPoints -= 33;
    currentHP -= 25;
    render();
}