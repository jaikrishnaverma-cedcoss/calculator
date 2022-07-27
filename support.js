let counter = 0;
var addable = "00";
function changebg(theme2 = "#353a50") {
    if (counter % 2 == 0) {

        document.getElementById("tbody").setAttribute('style', "background-color:"+theme2+"");
        document.getElementsByClassName("upper")[0].setAttribute('style', "background-color:#002c52");
        document.getElementsByClassName("upper")[1].setAttribute('style', "background-color:#002c52;color:white");
        for (let i = 0; i < 12; i++)
            document.getElementsByClassName("sp")[i].setAttribute('style', "background-color:"+theme2+";color:white");
        for (let j = 0; j < 7; j++)
            document.getElementsByClassName("sp1")[j].setAttribute('style', "background-color:#002c52;color:rgb(0, 204, 143);font-weight:600");
    }
    else {
        document.getElementById("tbody").setAttribute('style', "background-color:white");
        document.getElementsByClassName("upper")[0].setAttribute('style', "background-color:rgb(232, 255, 255)");
        document.getElementsByClassName("upper")[1].setAttribute('style', "background-color:rgb(232, 255, 255)");
        for (let i = 0; i < 12; i++)
            document.getElementsByClassName("sp")[i].setAttribute('style', "");
        for (let j = 0; j < 7; j++)
            document.getElementsByClassName("sp1")[j].setAttribute('style', "");

    }
    counter++
}

function add(id) {
    
   if (addable == "00") {
        if (id.value == "+" || id.value == "%" || id.value == "/" || id.value == "*" || id.value == "-" || id.value == "+" || id.value == ".")
        {
            return true;
        }

        addable = id.value;
    }
    else {
        addable += id.value;
    }
    document.getElementsByClassName("upper")[1].value = addable;
    var input=document.getElementsByClassName("upper")[1];
    input.focus(); //sets focus to element

}
function result() {
    addable =(Math.round(eval(addable)*10000)/10000);
    document.getElementsByClassName("upper")[1].value =addable ;

    // addable="";
}
function cleared() {
    addable = 00;
    document.getElementsByClassName("upper")[1].value = "00";
}
function square()
{
    let sq=eval(addable);
    sq=sq*sq;
    sq =(Math.round(sq*10000)/10000);
    document.getElementsByClassName("upper")[1].value = sq;
    addable=sq;
}
function copyr()
{
    document.getElementsByClassName("upper")[1].value="Jai's Calculator";
    setTimeout(cleared, 1000)

}