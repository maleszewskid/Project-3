$(function () {
    var $password = $(".form-control[type='password']");
    var $passwordAlert = $(".password-alert");
    var $requirements = $(".requirements");
    var leng, bigLetter, num, specialChar;
    var $leng = $(".leng");
    var $bigLetter = $(".big-letter");
    var $num = $(".num");
    var $specialChar = $(".special-char");
    var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    var numbers = "0123456789";

    $requirements.addClass("wrong");
    $password.on("focus", function(){$passwordAlert.show();});

    $password.on("input blur", function (e) {
        var el = $(this);
        var val = el.val();
        $passwordAlert.show();

        if (val.length < 8) {
            leng = false;
            $leng.text("Your password must have at least 8 chars.")
        }
        else if (val.length > 7) {
            leng=true;
            $leng.text("✓ Your password must have at least 8 chars.")
        }
        

        if(val.toLowerCase()==val){
            bigLetter = false;
            $bigLetter.text("Your password must have at least 1 capital letter.")
        }
        else{
            bigLetter=true;
            $bigLetter.text("✓ Your password must have at least 1 capital letter.")
        }
        
        num = false;
        $num.text("Your password must have at least 1 number.")
        for(var i=0; i<val.length;i++){
            for(var j=0; j<numbers.length; j++){
                if(val[i]==numbers[j]){
                    num = true;
                    $num.text("✓ Your password must have at least 1 number.")
                }
            }
        }
        
        specialChar=false;
        $specialChar.text("Your password must have at least 1 special char.")
        for(var i=0; i<val.length;i++){
            for(var j=0; j<specialChars.length; j++){
                if(val[i]==specialChars[j]){
                    specialChar = true;
                    $specialChar.text("✓ Your password must have at least 1 special char.")
                }
            }
        }

        console.log(leng, bigLetter, num, specialChar);
        
        if(leng==true&&bigLetter==true&&num==true&&specialChar==true){
            $(this).addClass("valid").removeClass("invalid");
            $requirements.removeClass("wrong").addClass("good");
            $passwordAlert.removeClass("alert-warning").addClass("alert-success");
        }
        else
        {
            $(this).addClass("invalid").removeClass("valid");
            $passwordAlert.removeClass("alert-success").addClass("alert-warning");

            if(leng==false){$leng.addClass("wrong").removeClass("good");}
            else{$leng.addClass("good").removeClass("wrong");}

            if(bigLetter==false){$bigLetter.addClass("wrong").removeClass("good");}
            else{$bigLetter.addClass("good").removeClass("wrong");}

            if(num==false){$num.addClass("wrong").removeClass("good");}
            else{$num.addClass("good").removeClass("wrong");}

            if(specialChar==false){$specialChar.addClass("wrong").removeClass("good");}
            else{$specialChar.addClass("good").removeClass("wrong");}
        }
        
        
        if(e.type == "blur"){
                $passwordAlert.hide();
            }
    });
});