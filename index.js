let x = Number(prompt("Enter the first number"));
let z = Number(prompt("Choose operation\n1 : Addition\n2 : Subtract\n3 : Multiplication\n4 : Divide"));
let y = Number(prompt("Enter the second number"));

if (z === 1) {
    let q = x + " + " + y + " = " +  (x + y);
    alert(q)
} else if (z === 2) {
    let c = x + " - " + y + " = " +  (x - y);
    alert(c)
} else if (z === 3) {
    let d = x + " * " + y + " = " + (x * y);
    alert(d)
} else if (z === 4) {
    let e = x + " / " + y + " = " + (x / y);
    alert(e)
} else {
    alert("Please choose one of the options above");
}

