var hoTen;
var gioiTinh;
var ho;
var tenDem;
var tenRieng;
hoTen = prompt("Nhập vào họ và tên:");
gioiTinh = prompt("Nhập vào giới tính (Nam/Nữ):");
var mangHoTen = hoTen.split(" ");
ho = mangHoTen[0];
tenRieng = mangHoTen[mangHoTen.length - 1];
if (mangHoTen.length > 2) {
  tenDem = "";
  for (var i = 1; i < mangHoTen.length - 1; i++) {
    tenDem += mangHoTen[i] + " ";
  }
} else {
  tenDem = "";
}
document.write("Họ: " + ho);
document.write("Tên đệm: " + tenDem);
document.write("Tên riêng: " + tenRieng);
if (gioiTinh == "Nam") {
  tenDem = "Văn ";
} else if (gioiTinh == "Nữ") {
  tenDem = "Vẽ";
} else {
  document.write("Giới tính không hợp lệ");
}
document.write("Tên mới: " + ho + " " + tenDem + tenRieng);