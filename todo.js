var tag = document.getElementsByTagName("LI");
var j;
for (j = 0; j< tag.length; j++){
    var span = document.createElement("SPAN");
    var text = document.createElement("\u00D7");
    span.className = "close";
    span.appendChild(text);
    tag[j].appendChild(span);

}

var close = document.getElementsByClassName("close");
var j;
for (j = 0; j < close.length; j++){
    close[j].onclick = function
    (){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
function addElement() {
var list = document.createElement("li");
var inputVal = document.getElementById("in-title").value;
var t = document.createTextNode(inputVal);
list.appendChild(t);
if(inputVal === ''){
    alert("Text field must be non empty");
}
else{
    document.getElementById("ul").appendChild(list);
}
document.getElementById("in-title").value = "";
var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list.appendChild(span);

    for (j = 0; j < close.length; j++){
        close[j].onclick = function
        (){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

