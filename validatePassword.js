var checkEmail =  function(){
    var str = document.getElementById('email').value;
    for(let i=0;i<str.length;i++){
        if(str[i]=='@'){
            return;
        }
        if(str[i]==',' || str[i]=='/'){
            break;
        }
    }
    alert("Check your Email Field");
    var s = "Check your Email Field"
    return s;
}

var check = function(){
    var s = checkEmail();
    if(s == "Check your Email Field"){
        return;
    }

    if(document.getElementById('pswd').value == document.getElementById('repswd').value){
        alert("Valid Registration");
    } 
    
    else{
        alert("Password not matching")
    }
}