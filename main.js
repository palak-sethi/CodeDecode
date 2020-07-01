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
    var n = str.length;
    var s = str.split("");
    var coded = "";
    for(var i=0; i<n; i++)
    {
        var c = str.charCodeAt(i);
        if((c >= 97 && c <= 109) || (c >= 65 && c <= 77))
        {
            c = c+13;
        }
        else if((c >= 110 && c <= 122) || (c >= 78 && c <= 90))
        {
            c = c-13;
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
        s[i] = String.fromCharCode(c);
    }
    var coded = s.join("");     
    document.getElementById("codedMessage").innerHTML = coded;
}

function decode2() {
    var str = document.getElementById("decodeMessage").value;
    var n = str.length;
    var s = str.split("");
    var coded = "";
    for(var i=0; i<n; i++)
    {
        var c = str.charCodeAt(i);
        if((c >= 97 && c <= 109) || (c >= 65 && c <= 77))
        {
            c = c+13;
        }
        else if((c >= 110 && c <= 122) || (c >= 78 && c <= 90))
        {
            c = c-13;
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
        s[i] = String.fromCharCode(c);
    }
    var decoded = s.join("");     
    document.getElementById("decodedMessage").innerHTML = decoded;
}