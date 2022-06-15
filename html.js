function runcode()  {
    var code=document.getElementById("html").value;
    var css=document.getElementById("css").value;
    document.getElementById("output").innerHTML=code;
    document.getElementById("cssbox").innerHTML = "<style>" + css +"</style>";
}
document.addEventListener("keyup",runcode);
document.addEventListener("paste",runcode);