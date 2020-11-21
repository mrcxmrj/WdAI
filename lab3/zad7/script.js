const name = document.getElementById("name");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const birthDate = document.getElementById("birthDate");
const retirementDate = document.getElementById("retirementDate");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    let messages = [];
    let passwordMessages = [];

    if (name.value === "" || name.value == null) {
        messages.push("imię i nazwisko");
    }

    if (phone.value === "" || phone.value == null) {
        messages.push("nr telefonu");
    }

    if (gender.value === "-") {
        messages.push("płeć");
    }

    if (password.value === "" || password.value == null) {
        messages.push("hasło");
    } else if (password.value.length <= 6) {
        passwordMessages.push("Hasło musi być dłuższe niż 6 znaków");
    }
    if (password.value.length >= 20) {
        passwordMessages.push("Hasło nie może być dłuższe niż 20 znaków");
    }

    if (birthDate.value === "" || birthDate.value == null) {
        messages.push("datę urodzenia");
    }

    if (retirementDate.value === "" || retirementDate.value == null) {
        messages.push("planowaną datę przejścia na emeryturę");
    }

    if (messages.length > 0) {
        event.preventDefault();
        const message =
            "Podaj " +
            messages.join(", ") +
            ". " +
            passwordMessages.join(". ") +
            ".";
        alert(message);
        return;
    }

    const birthYear = parseInt(birthDate.value.slice(0, 4));
    const retirementYear = parseInt(retirementDate.value.slice(0, 4));
    const retirementAge = retirementYear - birthYear;

    if (retirementAge >= 65 && gender.value == "M") {
        alert("Masz uprawnienia do emerytury");
    } else if (retirementAge >= 60 && gender.value == "K") {
        alert("Masz uprawnienia do emerytury");
    } else {
        alert("Nie masz uprawnień do emerytury");
    }
});
