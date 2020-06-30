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

function code2() {
    var str = document.getElementById("codeMessage").value;
    var s = str.split("");
    var n = s.length;
    var coded = "";
    for(var i=0; i<n; i++)
    {
        var c = s.charCodeAt(i);
        if((c >= 97 && c <= 109) || (c >= 65 && c <= 77))
        {
            c = c+14;
        }
        else if((c >= 110 && c <= 122) || (c >= 78 && c <= 90))
        {
            c = c-14;
        }
        else if((c >= 48 && c <= 52))
        {
            c = c + 5;
        }
        else if((c >= 53 && c <= 57))
        {
            c = c - 5;
        }
        else
        {
            continue;
        }
        s[i]=String.fromCharCode(c);
    }
    var coded = str.join("");     
    document.getElementById("codedMessage").innerHTML = coded;
}

function decode2() {

}