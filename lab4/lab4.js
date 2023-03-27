class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    getAgeInYears() {
      let today = new Date();
      let age = today.getFullYear() - this.dob.getFullYear();
      let m = today.getMonth() - this.dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < this.dob.getDate())) {
        age--;
      }
      return age;
    }
  
    getAgeInDays() {
      let today = new Date();
      let timeDiff = Math.abs(today.getTime() - this.dob.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
    }
  }
  
  let students = [
    new Student(1, 'A', 'Nguyen', '1', 'anguyen@gmail.com', '0123456789', '2005-01-01'),
    new Student(2, 'B', 'Tran', '1', 'btran@gmail.com', '0123456789', '2004-01-01'),
    new Student(3, 'C', 'Le', '1', 'cle@gmail.com', '0123456789', '2003-01-01'),
    new Student(4, 'D', 'Pham', '1', 'dpham@gmail.com', '0123456789', '2002-01-01'),
    new Student(5, 'E', 'Hoang', '1', 'ehoang@gmail.com', '0123456789', '2001-01-01'),
  ];
  
  students.sort((a,b) => a.getAgeInDays() - b.getAgeInDays());
  
  console.log('Sorted students by age in days:');
  for (let student of students) {
    document.write(`${student.getFullName()} - ${student.getAgeInDays()} days old`+"<br>");
  }
  document.write(`Screen width: ${screen.width}`);
  document.write("<br>")
  document.write(`Screen height: ${screen.height}`);