function openNav(){
    document.getElementById("nav").style.width="250px";
    document.getElementById("openNav").style.display="none";
}

function closeNav(){
    document.getElementById("nav").style.width="0px";
    document.getElementById("openNav").style.display="block";

}


function dark(){
    document.getElementById("body").style.backgroundColor="#504b4b";
    document.getElementById("dark").style.display="none";
    document.getElementById("lihtg").style.display="block";
    document.getElementById("pr").style.color="white";
}
function lihtg(){
    document.getElementById("body").style.backgroundColor="#f16529";
    document.getElementById("lihtg").style.display="none";
    document.getElementById("dark").style.display="block";
    document.getElementById("pr").style.color="#000";
}

function two(){
    document.getElementById("riht").style.backgroundImage="url('img/css3\ logo.png.crdownload')";
    document.getElementById("body").style.backgroundColor="#1c88c7";
    document.getElementById("pr").innerHTML=" Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG,";

}
function one(){
    document.getElementById("riht").style.backgroundImage="url('img/w3c-html5-logo-0.png')";
    document.getElementById("body").style.backgroundColor="#f16529";
    document.getElementById("pr").innerHTML="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS)";

}function three(){
    document.getElementById("riht").style.backgroundImage="url('img/javascript-2038874-1720087.webp')";
    document.getElementById("body").style.backgroundColor="rgb(210 190 44 / 93%)";
    document.getElementById("pr").innerHTML="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG,";

}
// foem
function forem(){

var useram = document.getElementById("userName").value;
var email = document.getElementById("Email").value;
var phone = document.getElementById("phone").value;
var password = document.getElementById("Password").value;
var erorer = document.getElementById("erorer");
var text = "";
if(useram.length < 6){
 text = "Please enter a valid username";
 erorer.innerHTML= text;
 return false
}else if(email.indexOf("@") == -1 || email.length < 6 ){
    text = "Please enter a valid Email";
    erorer.innerHTML= text;
    return false
}else if(phone.length < 10 ){
    text = "Please enter a valid phone";
    erorer.innerHTML= text;
    return false
}
else if(password.length < 10 ){
    text = "Please enter a valid password more than 10";
    erorer.innerHTML= text;
    return false
}
}