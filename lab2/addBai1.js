
let a = prompt("Nhập vào hệ số a:");
let b = prompt("Nhập vào hệ số b:");
let c = prompt("Nhập vào hệ số c:");

a = Number(a);
b = Number(b);
c = Number(c);

let delta = b * b - 4 * a * c;
if (delta < 0) {
    document.write("Phương trình vô nghiệm");
} else if (delta == 0) {
    let x = -b / (2 * a);
    document.write("Phương trình có nghiệm kép x =" + x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write("Phương trình có hai nghiệm phân biệt:");
    document.write("x1 =" + x1);
    document.write("x2 =" + x2);
}