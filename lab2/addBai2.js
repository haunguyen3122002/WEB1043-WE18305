var a = prompt("Nhập vào giá trị của a:");
var b = prompt("Nhập vào giá trị của b:");
var c = prompt("Nhập vào giá trị của c:");

a = Number(a);
b = Number(b);
c = Number(c);

if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b ==c) {
            document.write("Đây là một tam giác đều."); 
        } else if (a ==b || a ==c ||b ==c) {
            document.write("Đây là một tam giác can.");
        } else if (a*a +b*b ==c*c ||a*a +c*c ==b*b ||b*b +c*c ==a*a) {
            document.write("Đây là một tam gíac vuông.");
        } else {
            document.write("Đây là một tam gíac thường.");
        }
    } else {
        document.write("Ba số này không tạo thành một tam gíac hợp lệ.");
    }
} else {
    document.write("Ba số này phải là 3 số dương.");
}