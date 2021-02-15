function validateName() {
    let name = document.forms["form"]["fname"].value;
    let surname = document.forms["form"]["fsurname"].value;
    if (name == "") {
        document.querySelector(".validator-name").style.display = 'block';
    } else { document.querySelector(".validator-name").style.display = 'none'; }
}

function validateSurname() {
    let surname = document.forms["form"]["fsurname"].value;
    if (surname == "") {
        document.querySelector(".validator-surname").style.display = 'block';
    } else { document.querySelector(".validator-surname").style.display = 'none'; }
}

function validateEmail() {
    let email = document.forms["form"]["femail"].value;
    if (email == "" || emailIsValid(email) == false) {
        document.querySelector(".validator-email").style.display = 'block';
    } else { document.querySelector(".validator-email").style.display = 'none'; }

}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateDay() {
    let day = document.forms["form"]["fday"].value;
    if (day == "") {
        document.querySelector("#input-day").style.borderBottom = 'solid 1px red';
    } else { document.querySelector("#input-day").style.borderBottom = 'none'; }

}

function validateMonth() {
    let month = document.forms["form"]["fmonth"].value;
    if (month == "") {
        document.querySelector("#input-month").style.borderBottom = 'solid 1px red';
    } else { document.querySelector("#input-month").style.borderBottom = 'none'; }

}

function validateYear() {
    let year = document.forms["form"]["fyear"].value;
    if (year == "") {
        document.querySelector("#input-year").style.borderBottom = 'solid 1px red';

    } else { document.querySelector("#input-year").style.borderBottom = 'none'; }

    if (year > 2003) {
        document.querySelector(".validator-age").style.display = 'block';
    } else { document.querySelector(".validator-age").style.display = 'none'; }

}

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

let male = document.querySelector("#male").value;
let female = document.querySelector("#female").value;
function checkGender() {


    if (male == 0) {
        document.querySelector("#male").value = 1;
        document.querySelector("#female").value = 0;
        male=1;
        female=0;

    } else if (female == 0) {
        document.querySelector("#female").value = 1;
        document.querySelector("#male").value = 0;
        male=0;
        female=1;
    }
}

function validateGender() {
    if (male == 0 && female == 0) {
        document.querySelector(".gender-button").style.border='red solid 1px';
        document.querySelector(".gender-button-red").style.border='red solid 1px';
        document.querySelector(".validator-gender").style.display='block';

    } else  {
        document.querySelector(".gender-button").style.border='solid 1px rgb(23,121,186)';
        document.querySelector(".gender-button-red").style.border='solid 1px rgb(23,121,186)';
        document.querySelector(".validator-gender").style.display='none';
    }
}