document.onkeypress = function Sign () {
    var password = document.getElementsByClassName(".form-control[type='password']");
    var passwordAlert = document.getElementsByClassName(".password-alert");
    var requirements = document.getElementsByClassName(".requirements");
    var leng = document.getElementsByClassName(".leng");
    var leng1  = false;
    var bigLetter1  = false;
    var num1  = false;
    var specialChar1 = false;
    var bigLetter = document.getElementsByClassName(".big-letter");
    var num = document.getElementsByClassName(".num");
    var specialChar = document.getElementsByClassName(".special-char");
    var specialChars = "!@#%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    var numbers = "0123456789";
    var i = 0;
    var j = 0;
    requirements.classList.add("wrong");
    password.on("focus", function () { passwordAlert.show(); });
    password.on("input blur", function (e) {
        var el = document.getElementsByClassName(this);
        var val = el.val();
        passwordAlert.show();
        if (val.length < 8) {
            leng1 = false;
            leng.text("Your password must have at least 8 chars.")
        }
        else if (val.length > 7) {
            leng1 = true;
            leng.text("✓ Your password must have at least 8 chars.")
        }

        if (val.toLowerCase() === val) {
            bigLetter1 = false;
            bigLetter.text("Your password must have at least 1 capital letter.")
        }
        else {
            bigLetter1 = true;
            bigLetter.text("✓ Your password must have at least 1 capital letter.")
        }

        num1 = false;
        num.text("Your password must have at least 1 number.")
        for (i = 0; i < val.length; i++) {
            for (j = 0; j < numbers.length; j++) {
                if (val[i] === numbers[j]) {
                    num1 = true;
                    num.text("✓ Your password must have at least 1 number.")
                }
            }
        }

        specialChar1 = false;
        specialChar.text("Your password must have at least 1 special char.")
        for (i = 0; i < val.length; i++) {
            for (j = 0; j < specialChars.length; j++) {
                if (val[i] === specialChars[j]) {
                    specialChar1 = true;
                    specialChar.text("✓ Your password must have at least 1 special char.")
                }
            }
        }
        console.log(leng, bigLetter, num, specialChar);

        if (leng1 === true && bigLetter1 === true && num1 === true && specialChar1 === true) {
            document.getElementsByClassName(this).classList.add("valid").removeClass("invalid");
            requirements.removeClass("wrong").classList.add("good");
            passwordAlert.removeClass("alert-warning").classList.add("alert-success");
        }
        else {
            document.getElementsByClassName(this).classList.add("invalid").removeClass("valid");
            passwordAlert.removeClass("alert-success").classList.add("alert-warning");
            if (leng1 === false) { leng.classList.add("wrong").removeClass("good"); }
            else { leng.classList.add("good").removeClass("wrong"); }
            if (bigLetter1 === false) { bigLetter.classList.add("wrong").removeClass("good"); }
            else { bigLetter.classList.add("good").removeClass("wrong"); }
            if (num1 === false) { num.classList.add("wrong").removeClass("good"); }
            else { num.classList.add("good").removeClass("wrong"); }
            if (specialChar1 === false) { specialChar.classList.add("wrong").removeClass("good"); }
            else { specialChar.classList.add("good").removeClass("wrong"); }
        }


        if (e.type === "blur") {
            passwordAlert.hide();
        }
    });
};