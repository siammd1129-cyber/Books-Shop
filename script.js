const allBooksContainer = document.getElementById("allBooksContainer")
const allBooksContainer1 = document.getElementById("allBooksContainer1")
const allBooksContainer2 = document.getElementById("allBooksContainer2")
const allBooksContainer3 = document.getElementById("allBooksContainer3")


const buttonAllDive = document.getElementById("buttons")

const button1 = document.getElementById("btn-1")
const button2 = document.getElementById("btn-2")
const button3 = document.getElementById("btn-3")
const button4 = document.getElementById("btn-4")


let curentTap = "btn-1"

async function booksContainer() {
    const res = await fetch("./json.api")
    const data = await res.json()
    showTheCards(data.books)
}
booksContainer();

const showTheCards = (infos) => {
    // allBooksContainer.innerHTML = "";
    infos.forEach(element => {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = `
        <div class="flex flex-col items-center text-center border-2 border-red-500 rounded-xl p-4 w-60">
    
    <img src="${element.image}" class="w-32 h-32 object-cover mb-2">

    <h1 class="text-lg font-semibold">${element.title}</h1>
    <p class="text-sm text-gray-600">${element.author}</p>
    <p class="text-sm text-gray-500">${element.category}</p>

</div>
        
        `
        allBooksContainer.appendChild(newDiv);

        if (element.category === "story") {
            const storyCardClone = newDiv.cloneNode(true)
            allBooksContainer1.appendChild(storyCardClone);
        }
        if (element.category === "comedy") {
            const comedyCardClone = newDiv.cloneNode(true)
            allBooksContainer2.appendChild(comedyCardClone);
        }
        if (element.category === "horror") {
            const horrorCardClone = newDiv.cloneNode(true)
            allBooksContainer3.appendChild(horrorCardClone);
            
        }
    });


}



buttonAllDive.addEventListener("click", (event) => {

    const clicked = event.target;

    if (clicked === button1) {
        button1.classList.add("btn-primary");
        button2.classList.remove("btn-primary");
        button3.classList.remove("btn-primary");
        button4.classList.remove("btn-primary");


        curentTap = "btn-1";



    }
    else if (clicked === button2) {
        button2.classList.add("btn-primary");
        button1.classList.remove("btn-primary");
        button3.classList.remove("btn-primary");
        button4.classList.remove("btn-primary");

        curentTap = "btn-2";

    }
    else if (clicked === button3) {
        button3.classList.add("btn-primary");
        button2.classList.remove("btn-primary");
        button1.classList.remove("btn-primary");
        button4.classList.remove("btn-primary");
        curentTap = "btn-3";

    }
    else if (clicked === button4) {
        button4.classList.add("btn-primary");
        button2.classList.remove("btn-primary");
        button1.classList.remove("btn-primary");
        button3.classList.remove("btn-primary");

        curentTap = "btn-4";
    }


    //  console.log(curentTap);
    changeTap()
})


const changeTap = (allBtns) => {

    if (curentTap == "btn-1") {
        allBooksContainer.classList.remove("hidden");
        allBooksContainer1.classList.add("hidden");
        allBooksContainer2.classList.add("hidden");
        allBooksContainer3.classList.add("hidden");
    }
    else if (curentTap == "btn-2") {
        allBooksContainer1.classList.remove("hidden");
        allBooksContainer.classList.add("hidden");
        allBooksContainer2.classList.add("hidden");
        allBooksContainer3.classList.add("hidden");
    }
    else if (curentTap == "btn-3") {
        allBooksContainer2.classList.remove("hidden");
        allBooksContainer.classList.add("hidden");
        allBooksContainer1.classList.add("hidden");
        allBooksContainer3.classList.add("hidden");
    }
    else if (curentTap == "btn-4") {
        allBooksContainer3.classList.remove("hidden");
        allBooksContainer.classList.add("hidden");
        allBooksContainer1.classList.add("hidden");
        allBooksContainer2.classList.add("hidden");
    }

}
changeTap()