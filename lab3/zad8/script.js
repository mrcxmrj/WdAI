const submitBtn = document.getElementById("submitBtn")
const newNumberElement = document.getElementById("newNumber")
const stats = document.getElementById("currentStats")
let smallest = 0
let largest = 0
first = new Boolean(true)

submitBtn.addEventListener("click", () => {
    let newNumber = newNumberElement.value
    if(newNumber == null || newNumber == ""){
        alert("Podaj liczbę!")
        return
    }

    if(newNumber < smallest) {smallest = newNumber}
    if(newNumber > largest) {largest = newNumber}

    //first smallest update
    if(first){
        smallest = newNumber
        first = false
    }

    stats.innerHTML = "największa wprowadzona liczba: " + largest + "<br>najmniejsza wprowadzona liczba: " + smallest
    newNumberElement.value = ""
})