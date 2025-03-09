let containerBox = document.querySelector(".conBox");
function defaultGrid(){
    for (let i = 1; i <= 256; ++i){
        let eachBox = document.createElement("div");
        eachBox.className = "box";
        containerBox.appendChild(eachBox);
        eachBox.style.cssText = `width: calc(100% / 16); aspect-ratio: 1 / 1; box-sizing: border-box; margin: 0px; border: thin solid blue;`;
    }
}

document.addEventListener("DOMContentLoaded", defaultGrid);

function changeGrid(){
    let userInput = Number(prompt("Enter a number from 1 to 100", "1-100"));
    if (userInput > 100 || userInput < 1 || isNaN(userInput)){
        alert("You did not enter a number between 1 to 100");
    }else{
        containerBox.replaceChildren();
        for (let i = 1; i <= userInput * userInput; ++i){
            let eachBox = document.createElement("div");
            eachBox.className = "box";
            containerBox.appendChild(eachBox);
            eachBox.style.cssText = `width: calc(100% / ${userInput}); aspect-ratio: 1 / 1; box-sizing: border-box; margin: 0px; border: thin solid green;`;
        }
    }
}

const btn = document.querySelector("button");
btn.addEventListener("click", changeGrid);

document.addEventListener("mouseover", (event) => {
    console.log("Hover detected on:", event.target);
    if (event.target.classList.contains("box")) {
        event.target.style.setProperty(
            "background-color",
            `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`,
            "important"
        );
    }
    
});

