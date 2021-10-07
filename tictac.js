let value = "X";
let status = "none";
let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let x = 0;
let o = 0;

function tic1() {
  if (document.querySelector("#one").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d1").innerHTML = value;
        document.querySelector(".d1").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d1").innerHTML = value;
        document.querySelector(".d1").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function tic2() {
  if (document.querySelector("#two").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d2").innerHTML = value;
        document.querySelector(".d2").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d2").innerHTML = value;
        document.querySelector(".d2").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function tic3() {
  if (document.querySelector("#three").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d3").innerHTML = value;
        document.querySelector(".d3").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d3").innerHTML = value;
        document.querySelector(".d3").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function tic4() {
  if (document.querySelector("#four").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d4").innerHTML = value;
        document.querySelector(".d4").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d4").innerHTML = value;
        document.querySelector(".d4").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function tic5() {
  if (document.querySelector("#five").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d5").innerHTML = value;
        document.querySelector(".d5").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d5").innerHTML = value;
        document.querySelector(".d5").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function tic6() {
  if (document.querySelector("#six").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d6").innerHTML = value;
        document.querySelector(".d6").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d6").innerHTML = value;
        document.querySelector(".d6").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function tic7() {
  if (document.querySelector("#seven").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d7").innerHTML = value;
        document.querySelector(".d7").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d7").innerHTML = value;
        document.querySelector(".d7").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function tic8() {
  if (document.querySelector("#eight").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d8").innerHTML = value;
        document.querySelector(".d8").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d8").innerHTML = value;
        document.querySelector(".d8").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function tic9() {
  if (document.querySelector("#nine").innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d9").innerHTML = value;
        document.querySelector(".d9").style.color = "blue";
      } else {
        value = "X";
        document.querySelector(".d9").innerHTML = value;
        document.querySelector(".d9").style.color = "red";
      }
      Xwin();
      Owin();
    }
  }
}

function Xwin() {
  a = document.querySelector("#one").innerHTML;
  b = document.querySelector("#two").innerHTML;
  c = document.querySelector("#three").innerHTML;
  d = document.querySelector("#four").innerHTML;
  e = document.querySelector("#five").innerHTML;
  f = document.querySelector("#six").innerHTML;
  g = document.querySelector("#seven").innerHTML;
  h = document.querySelector("#eight").innerHTML;
  i = document.querySelector("#nine").innerHTML;

  if (a == "X" && b == "X" && c == "X") {
    document.querySelector("#one").style.background = "blue";
    document.querySelector("#two").style.background = "blue";
    document.querySelector("#three").style.background = "blue";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (d == "X" && e == "X" && f == "X") {
    document.querySelector("#four").style.background = "blue";
    document.querySelector("#five").style.background = "blue";
    document.querySelector("#six").style.background = "blue";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (g == "X" && h == "X" && i == "X") {
    document.querySelector("#seven").style.background = "blue";
    document.querySelector("#eight").style.background = "blue";
    document.querySelector("#nine").style.background = "blue";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (a == "X" && e == "X" && i == "X") {
    document.querySelector("#one").style.background = "blue";
    document.querySelector("#five").style.background = "blue";
    document.querySelector("#nine").style.background = "blue";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (c == "X" && e == "X" && g == "X") {
    document.querySelector("#three").style.background = "blue";
    document.querySelector("#five").style.background = "blue";
    document.querySelector("#seven").style.background = "blue";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (a == "X" && d == "X" && g == "X") {
    document.querySelector("#one").style.background = "blue";
    document.querySelector("#four").style.background = "blue";
    document.querySelector("#seven").style.background = "blue";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (b == "X" && e == "X" && h == "X") {
    document.querySelector("#two").style.background = "blue";
    document.querySelector("#five").style.background = "blue";
    document.querySelector("#eight").style.background = "blue";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (c == "X" && f == "X" && i == "X") {
    document.querySelector("#three").style.background = "blue";
    document.querySelector("#six").style.background = "blue";
    document.querySelector("#nine").style.background = "blue";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else {
  }
}

function Owin() {
  a = document.querySelector("#one").innerHTML;
  b = document.querySelector("#two").innerHTML;
  c = document.querySelector("#three").innerHTML;
  d = document.querySelector("#four").innerHTML;
  e = document.querySelector("#five").innerHTML;
  f = document.querySelector("#six").innerHTML;
  g = document.querySelector("#seven").innerHTML;
  h = document.querySelector("#eight").innerHTML;
  i = document.querySelector("#nine").innerHTML;

  if (a == "O" && b == "O" && c == "O") {
    document.querySelector("#one").style.background = "red";
    document.querySelector("#two").style.background = "red";
    document.querySelector("#three").style.background = "red";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (d == "O" && e == "O" && f == "O") {
    document.querySelector("#four").style.background = "red";
    document.querySelector("#five").style.background = "red";
    document.querySelector("#six").style.background = "red";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (g == "O" && h == "O" && i == "O") {
    document.querySelector("#seven").style.background = "red";
    document.querySelector("#eight").style.background = "red";
    document.querySelector("#nine").style.background = "red";
    status = "win";

    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (a == "O" && e == "O" && i == "O") {
    document.querySelector("#one").style.background = "red";
    document.querySelector("#five").style.background = "red";
    document.querySelector("#nine").style.background = "red";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (c == "O" && e == "O" && g == "O") {
    document.querySelector("#three").style.background = "red";
    document.querySelector("#five").style.background = "red";
    document.querySelector("#seven").style.background = "red";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (a == "O" && d == "O" && g == "O") {
    document.querySelector("#one").style.background = "red";
    document.querySelector("#four").style.background = "red";
    document.querySelector("#seven").style.background = "red";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (b == "O" && e == "O" && h == "O") {
    document.querySelector("#two").style.background = "red";
    document.querySelector("#five").style.background = "red";
    document.querySelector("#eight").style.background = "red";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (c == "O" && f == "O" && i == "O") {
    document.querySelector("#three").style.background = "red";
    document.querySelector("#six").style.background = "red";
    document.querySelector("#nine").style.background = "red";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else {
  }
}

function restart() {
  document.querySelector("#one").innerHTML = "";
  document.querySelector("#two").innerHTML = "";
  document.querySelector("#three").innerHTML = "";
  document.querySelector("#four").innerHTML = "";
  document.querySelector("#five").innerHTML = "";
  document.querySelector("#six").innerHTML = "";
  document.querySelector("#seven").innerHTML = "";
  document.querySelector("#eight").innerHTML = "";
  document.querySelector("#nine").innerHTML = "";

  document.querySelector("#one").style.background = "white";
  document.querySelector("#two").style.background = "white";
  document.querySelector("#three").style.background = "white";
  document.querySelector("#four").style.background = "white";
  document.querySelector("#five").style.background = "white";
  document.querySelector("#six").style.background = "white";
  document.querySelector("#seven").style.background = "white";
  document.querySelector("#eight").style.background = "white";
  document.querySelector("#nine").style.background = "white";

  status = "none";
}
