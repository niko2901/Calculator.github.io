let data = "";
let ans = true;

function disp(val)
{
    var calc_disp = document.getElementById("result");
    calc_disp.value += val;
}

function clr_disp()
{
    document.getElementById("result").value = '';
    data = "";
    ans = true;
    document.getElementById("add").style.color = "lightgrey";
    document.getElementById("subt").style.color = "lightgrey";
    document.getElementById("mult").style.color = "lightgrey";
    document.getElementById("divi").style.color = "lightgrey";
    document.getElementById("modulus").style.color = "lightgrey";
}

function backspace()
{
    var calc_disp = document.getElementById("result");
    calc_disp.value = calc_disp.value.substring(0, calc_disp.value.length - 1);
}

function operator(val)
{
    let calc_disp = document.getElementById("result");
    data += calc_disp.value;
    if (calc_disp.value == "")
    {
        data = data.slice(0, data.length-1);
        console.log(data);
    }
    if (data.match(/[0-9]/g))
    {
        data += val;
        console.log(data);
    }
    indicator(val);

    calc_disp.value = "";
    ans = false;
}

function indicator(val)
{
    let add = document.getElementById("add").style;
    let subt = document.getElementById("subt").style;
    let multi = document.getElementById("mult").style;
    let divi = document.getElementById("divi").style;
    let modul = document.getElementById("modulus").style;

    add.color = "lightgrey";
    subt.color = "lightgrey";
    multi.color = "lightgrey";
    divi.color = "lightgrey";
    modul.color = "lightgrey";

    switch(val)
    {
        case '+':
            add.color = "black";
            break;

        case '-':
            subt.color = "black";
            break;

        case '*':
            multi.color = "black";
            break;

        case '/':
            divi.color = "black";
            break;

        case '%':
            modul.color = "black";
            break;
    }
}

function modul()
{
    var calc_disp = document.getElementById("result");
    data += calc_disp.value;
    if(calc_disp.value == "")
    {
        data = data.slice(0, data.length-1);
        console.log(data);
    }
    else
    {
        data += '%';
        calc_disp.value = "";
        ans = false;
        document.getElementById("modulus").style.color = "black";
        document.getElementById("add").style.color = "lightgrey";
        document.getElementById("subt").style.color = "lightgrey";
        document.getElementById("mult").style.color = "lightgrey";
        document.getElementById("divi").style.color = "lightgrey";
        console.log(data);
    }
}


function answer()
{   
    let calc_disp = document.getElementById("result");
    let result;

    if(data == "")
    {
        ans == true;
        document.getElementById("add").style.color = "lightgrey";
        document.getElementById("subt").style.color = "lightgrey";
        document.getElementById("mult").style.color = "lightgrey";
        document.getElementById("divi").style.color = "lightgrey";
        document.getElementById("modulus").style.color = "lightgrey";
    }
    else if(ans == false)
    {
        result = solve();
        calc_disp.value = result;
        add_history(result);
        data = "";
        ans = true;
        document.getElementById("add").style.color = "lightgrey";
        document.getElementById("subt").style.color = "lightgrey";
        document.getElementById("mult").style.color = "lightgrey";
        document.getElementById("divi").style.color = "lightgrey";
        document.getElementById("modulus").style.color = "lightgrey";
    }
}

function solve() 
{
    let calc_disp = document.getElementById("result");
    let calc_value = calc_disp.value;
    let result;
    data += calc_value;
    try
    {
        result = math.evaluate(data);
    }catch(err)
    {
        document.getElementById("result").value = err.message;
    }
    return result;
}

function add_history(val)
{
    var element = document.createElement("div");
    element.appendChild(document.createTextNode(data+" = "+val));
    document.getElementById("recent").appendChild(element);
    element.appendChild(document.createElement("hr"));
}

function clr_history()
{
    const list = document.getElementById("recent");

    while (list.hasChildNodes())
    {
        list.removeChild(list.firstChild);
    }
    document.getElementById("result").value = '';
    data = "";
}