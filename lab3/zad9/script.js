//[0].value == name, [1].value == phone
let formNodes = document.querySelectorAll("#form input");
console.log(formNodes);

const list = document.querySelector(".list ul");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formNodes[0].value == "" || formNodes[1].value == "") {
        alert("Uzupełnij formularz poprawnie!");
        return;
    }

    let newItem = document.createElement("li");
    newItem.className = "list-group-item d-flex justify-content-between";
    newItem.innerHTML =
        '<div class="content">' +
        formNodes[0].value +
        "<br>" +
        formNodes[1].value +
        '</div><button type=button class="btn btn-danger" onclick="removeItem(this)"><i class="fa fa-trash" aria-hidden="true"></i></button>';

    list.appendChild(newItem);

    formNodes[0].value = "";
    formNodes[1].value = "";
});

function removeItem(item) {
    item.closest(".list-group-item").remove();
}
