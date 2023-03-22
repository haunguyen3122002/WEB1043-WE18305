let person = {
    cccd: 12345678910,
    ho: "Hoang",
    tendem: "",
    ten: "ha",
    email: "ha@gmail.com",
    getFullName: function(){
        let fullName = this.ho +" " + this.tendem + " " + this.ten;
        return fullName;
    }
};
person.ho = "Tran",

console.log(person.ho +" " + person.tendem + " " + person.ten);

class SinhVien {
    constructor(masv, hosv, tensv, email, sdt, namsinh){
        this.masv = masv;
        this.hosv = hosv;
        this.tensv = tensv;
        this.email = email;
        this.sdt = sdt;
        this.namsinh = namsinh;
    }
    getFullNam (){
        return this.hosv + " " + this.tensv;
    }

    getAge(){
        let date = new date();
        let currentyear = date.getFullYear;
        lat = currentyear - this.namsinh;
        return this.getAge;
    }
}
let sv1 = new SinhVien('PD001','Tran','sum','sum@gmail.com','0983737476');

console.log(sv1.masv);
console.log(sv1.getFullNam);