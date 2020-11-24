/**script uses json-server-multiple-files package from https://github.com/huychau/json-server-multiple-files
run npm start in ./json-server-multiple-files to host json product files
*/

//asynchronous function returning Products in JSON as a promise
const returnProducts = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    products = await response.json();
    return products;
};

const list = document.getElementById("dropdown");
const checkedListBox = document.getElementById("checkedListBox");
let checkedList = [];

returnProducts("http://localhost:3000/db")
    .then((response) => {
        console.log(response);

        for (kategoria of response.kategorie.Kategorie) {
            //build new category
            let newItem = document.createElement("div");
            let newBtn = document.createElement("button");
            let newContentDiv = document.createElement("div");
            newItem.className = "item";
            newContentDiv.className = "content";
            newBtn.setAttribute("type", "button");
            newBtn.className = "collapsible";
            newBtn.innerHTML =
                '<i class="fa fa-plus" aria-hidden="true"></i>' + kategoria;

            list.appendChild(newItem);
            newItem.appendChild(newBtn);
            newItem.appendChild(newContentDiv);

            //parse product files for category elements and add to array
            let matchingProducts = [];
            let listA = response.produktyA[kategoria];
            let listB = response.produktyB[kategoria];

            if (typeof listA !== "undefined") {
                for (product of listA) {
                    if (!matchingProducts.includes(product)) {
                        matchingProducts.push(product);
                    }
                }
            }
            if (typeof listB !== "undefined") {
                for (product of listB) {
                    if (!matchingProducts.includes(product)) {
                        matchingProducts.push(product);
                    }
                }
            }
            //console.log(matchingProducts);

            //if any matching products were found create a list containing them
            if (matchingProducts.length) {
                //newContentDiv.innerHTML = matchingProducts
                let sublist = document.createElement("ul");
                newContentDiv.appendChild(sublist);
                for (product of matchingProducts) {
                    let newListElement = document.createElement("li");
                    newListElement.innerHTML =
                        '<label><input type="checkbox" />' +
                        product +
                        "</label>";
                    sublist.appendChild(newListElement);
                }
            }
        }

        let coll = document.getElementsByClassName("collapsible");
        setCollapse(coll);
    })
    .then(() => {
        const checkboxes = document.querySelectorAll("input");
        const buttons = document.querySelectorAll("button");

        for (checkbox of checkboxes) {
            checkbox.addEventListener("click", itemAddRemove);
        }

        for (button of buttons) {
            button.addEventListener("click", function () {
                this.firstChild.classList.toggle("fa-minus");
            });
        }
    });

function itemAddRemove() {
    //console.log(this.parentElement.innerText);
    let product = this.parentElement.innerText;
    if (!checkedList.includes(product)) {
        checkedList.push(product);
    } else {
        const index = checkedList.indexOf(product);
        if (index > -1) {
            checkedList.splice(index, 1);
        }
    }

    updateCheckedListBox();
}

function updateCheckedListBox() {
    let checkedListFormatted = "<ol>"
    for(item of checkedList){
        checkedListFormatted += "<li>" + item + "</li>"
    }
    checkedListFormatted += "</ol>"
    checkedListBox.innerHTML = checkedListFormatted;
}

//code managing collapsing elements
function setCollapse(coll) {
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}