let select=document.querySelectorAll(".select");

for(selected of select){
let option=document.createElement("option");
option.innerHTML="हिन्दी";
selected.append(option)
}

let secondPage = document.querySelector(".allcard");
let object = "";

items.forEach((item) => {

    object += `<div class="card">
                    <h1>${item.h1}</h1>
                    <p>${item.p}</p>
                    <img src="${item.image}" </div>
                </div>`
});

secondPage.innerHTML = object;


let footer1 = document.querySelector(".footer1");
let object1 = "";

items1.forEach((value) => {
    object1 += ` <div class="suggestion">
                      ${value.question}
                    </div>
                    <div class="suggestion1">
                     ${value.ans}
                        
                    </div>`
})
footer1.innerHTML = object1;

let suggestions = document.querySelectorAll(".suggestion");
let suggestions1 = document.querySelectorAll(".suggestion1")


suggestions.forEach((suggestion,index) => {
    suggestion.addEventListener("click", () => {
        const details = suggestions1[index];
        if (details.style.display === "none") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    });
});