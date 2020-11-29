/* jshint esversion:6 */

const totalButton = document.getElementById("myTotal");
totalButton.addEventListener("click", totalPrice);

function totalPrice() {
    const goomba = parseInt(document.getElementById("goomba").value);
    const bobOmb = parseInt(document.getElementById("bobomb").value);
    const cheepEep = parseInt(document.getElementById("cheep").value);
    
    let result = document.getElementById("inputTotal");
    let total =  (goomba * 5) + (bobOmb * 7) + (cheepEep * 11);
    result.innerHTML = `${total} COINS`;
}
