/*
Princess Peach has a huge infestation of Goombas, Bob-ombs, and Cheep-cheeps, and 
has commissioned Mario to take care of her pest problem. Mario did the job, but 
he is having trouble keep track of how many he has caught and has asked you to 
build him a website that keeps track of how many baddies he caught for Princess 
Peach so he can send her a bill.

Pricing
    Goombas: 5 Coins
    Bob-ombs: 7 Coins
    Cheep-cheeps: 11 Coins
    Baddies Caught

The number of baddies caught will be entered into their input fields. Each baddies type will have their own input field.

Total Price
    This will be dynamic, depending on how many baddies were caught.
*/


const totalButton = document.getElementById("myTotal");
totalButton.addEventListener("click", totalPrice);

function totalPrice() {
    const goomba = parseInt(document.getElementById("goomba").value);
    const bobOmb = parseInt(document.getElementById("bobomb").value);
    const cheepEep = parseInt(document.getElementById("cheep").value);
    
    let result = document.getElementById("inputTotal");
    let total = (goomba * 5) + (bobOmb * 7) + (cheepEep * 11);

    result.innerHTML = `${total} COINS`;
}