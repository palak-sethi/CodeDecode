function showCode()  {
    document.getElementById('code').style.display = "block";
    document.getElementById('codeBtn').style.display = "none";
}

function showDecode()  {
    document.getElementById('decode').style.display = "block";
    document.getElementById('decodeBtn').style.display = "none";
}

function code1() {
    var str = document.getElementById("codeMessage").value;
    var rev = str.split("").reverse().join("");
    document.getElementById("codedMessage").innerHTML = rev;
}


function decode1() {
    var str = document.getElementById("decodeMessage").value;
    var rev = str.split("").reverse().join("");
    document.getElementById("decodedMessage").innerHTML = rev;
}

