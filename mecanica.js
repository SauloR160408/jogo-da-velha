var t1 = document.getElementById("1t")
var t2 = document.getElementById("2t")
var t3 = document.getElementById("3t")
var m1 = document.getElementById("1m")
var m2 = document.getElementById("2m")
var m3 = document.getElementById("3m")
var b1 = document.getElementById("1b")
var b2 = document.getElementById("2b")
var b3 = document.getElementById("3b")
var td = document.querySelectorAll(".tds")

var c = 0
var jogada = "X"

var j1 = prompt("qual seu nome player1?")
var j2 = prompt("qual seu nome player2?")

td.forEach(function(td) {
    td.addEventListener("click", () => {
        
        if (td.innerHTML === "X" || td.innerHTML === "O") {
            return ;
        }
        c++;
        
        if (c % 2 === 0) {
            jogada = "O";
        } else {
            jogada = "X";
        }
        
        td.innerHTML = jogada;
        td.style.fontSize = "100px";
        td.style.fontFamily = "Arial";

        if (vit()){
            return ;
        }
        if (c===9) {
            alert("Deu véa!")
            clear()
        }
        
    });
    
});
function vit() {
    let v = false
    if (t1.innerHTML=="X" && t2.innerHTML=="X" && t3.innerHTML=="X") {
        alert("Você ganhou:"+j1)
        clear()
        v = true
    } else if(t1.innerHTML=="O" && t2.innerHTML=="O" && t3.innerHTML=="O"){
        alert("Você ganhou:"+j2)
        clear()
        v = true
    }
    if (m1.innerHTML=="X" && m2.innerHTML=="X" && m3.innerHTML=="X") {
        alert("Você ganhou:"+j1)
        clear()
        v = true
    } else if(m1.innerHTML=="O" && m2.innerHTML=="O" && m3.innerHTML=="O"){
        alert("Você ganhou:"+j2)
        clear()
        v = true
    }
    if (b1.innerHTML=="X" && b2.innerHTML=="X" && b3.innerHTML=="X") {
        alert("Você ganhou:"+j1)
        clear()
        v = true
    } else if(b1.innerHTML=="O" && b2.innerHTML=="O" && b3.innerHTML=="O"){
        alert("Você ganhou:"+j2)
        clear()
        v = true
    }
    if (t1.innerHTML=="X" && m2.innerHTML=="X" && b3.innerHTML=="X") {
        alert("Você ganhou:"+j1)
        clear()
        v = true
    } else if(t1.innerHTML=="O" && m2.innerHTML=="O" && b3.innerHTML=="O"){
        alert("Você ganhou:"+j2)
        clear()
        v = true
    }
    if (b1.innerHTML=="X" && m2.innerHTML=="X" && t3.innerHTML=="X") {
        alert("Você ganhou:"+j1)
        clear()
        v = true
    } else if(b1.innerHTML=="O" && m2.innerHTML=="O" && t3.innerHTML=="O"){
        alert("Você ganhou:"+j2)
        clear()
        v = true
    }
    if (t1.innerHTML=="X" && b1.innerHTML=="X" && m1.innerHTML=="X") {
        alert("Você ganhou:"+j1)
        clear()
        v = true
    } else if(t1.innerHTML=="O" && b1.innerHTML=="O" && m1.innerHTML=="O"){
        alert("Você ganhou:"+j2)
        clear()
        v = true
    }
    if (t2.innerHTML=="X" && b2.innerHTML=="X" && m3.innerHTML=="X") {
        alert("Você ganhou:"+j1)
        clear()
        v = true
    } else if(t2.innerHTML=="O" && b2.innerHTML=="O" && m2.innerHTML=="O"){
        alert("Você ganhou:"+j2)
        clear()
        v = true
    }
    if (m3.innerHTML=="X" && b3.innerHTML=="X" && t3.innerHTML=="X") {
        alert("Você ganhou:"+j1)
        clear()
        v = true
    } else if(m3.innerHTML=="O" && b3.innerHTML=="O" && t3.innerHTML=="O"){
        alert("Você ganhou:"+j2)
        clear()
        v = true
    }
    return v
}
function clear() {
    
    td.forEach(function(td) {
        td.innerHTML = "";
    });

    c = 0;
    jogada = "X";
}



