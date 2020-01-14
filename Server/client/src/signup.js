document.onkeypress = function Sign() {
    var password = document.getElementsByClassName(".form-control[type='password']");
    var passwordAlert = document.getElementsByClassName(".password-alert");
    var requirements = document.getElementsByClassName(".requirements");
    var leng = document.getElementsByClassName(".leng");
    var leng1 = false;
    var bigLetter1 = false;
    var num1 = false;
    var specialChar1 = false;
    var bigLetter = document.getElementsByClassName(".big-letter");
    var num = document.getElementsByClassName(".num");
    var specialChar = document.getElementsByClassName(".special-char");
    var specialChars = "!@#%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    var numbers = "0123456789";

    var i = 0;
    var j = 0;
    requirements.className += "wrong";

    password.onfocus = function () { passwordAlert.style.display = 'none'; };
    password.onblur = function (e) {
        var el = document.getElementsByClassName(this);
        var val = el.value;
        passwordAlert.style.display = 'block';
        if (val.length < 8) {
            leng1 = false;
            leng.innerHTML = "Your password must have at least 8 chars."
        }
        else if (val.length > 7) {
            leng1 = true;
            leng.innerHTML = "✓ Your password must have at least 8 chars."
        }

        if (val.toLowerCase() === val) {
            bigLetter1 = false;
            bigLetter.innerHTML = "Your password must have at least 1 capital letter."
        }
        else {
            bigLetter1 = true;
            bigLetter.innerHTML = "✓ Your password must have at least 1 capital letter."
        }

        num1 = false;
        num.innerHTML = "Your password must have at least 1 number."
        for (i = 0; i < val.length; i++) {
            for (j = 0; j < numbers.length; j++) {
                if (val[i] === numbers[j]) {
                    num1 = true;
                    num.innerHTML = "✓ Your password must have at least 1 number."
                }
            }
        }

        specialChar1 = false;
        specialChar.innerHTML = "Your password must have at least 1 special char."
        for (i = 0; i < val.length; i++) {
            for (j = 0; j < specialChars.length; j++) {
                if (val[i] === specialChars[j]) {
                    specialChar1 = true;
                    specialChar.innerHTML = "✓ Your password must have at least 1 special char."
                }
            }
        }
        console.log(leng, bigLetter, num, specialChar);

        if (leng1 == true && bigLetter1 == true && num1 == true && specialChar1 == true) {
            document.getElementByClassName(this).classList.replace("invalid, valid");
            requirements.classList.replace("wrong, good");
            passwordAlert.classList.replace("alert-warning, alert-success");
        }
        else {
            document.getElementByClassName(this).classList.replace("valid, invalid");
            passwordAlert.classList.replace("alert-success, alert-warning");
            if (leng1 == false) { leng.classList.replace("good, wrong"); }
            else { leng.classList.replace("wrong, good"); }
            if (bigLetter1 == false) { bigLetter.classList.replace("good, wrong"); }
            else { bigLetter.classList.replace("wrong, good"); }
            if (num1 == false) { num.classList.replace("good, wrong"); }
            else { num.classList.replace("wrong, good"); }
            if (specialChar1 == false) { specialChar.classList.replace("good, wrong"); }
            else { specialChar.classList.replace("wrong, good"); }
        }

        if (e.activeElement === "blur") {
            passwordAlert.style.display = 'none';
        }
    };
};