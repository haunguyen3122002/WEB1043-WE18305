function validateInput() {
  let formElement = document.querySelector(".form")
  let validateInput = formElement.querySelector(".form-input")
  for (let i = 0; i < inputElement.legth; i++) {
    if (inputElement[i].value === " ") {
      inputElement[i].parentElement.querySelector(".error-message").innerText = 'Please enter your ${inputElemetn[i].id}'
    } else {
      inputElement[i].parentElement.querySelector(".error-message").innerText = " "
    }
  }
}
function addNew() {
  validateInput()
  let formElement = document.querySelector(".form")
  let errorElement = formElement.querySelectorAll(".error-message")
  let arrErrorElement = []
  for (let i = 0; i < errorElement.length; i++) {
    arrErrorElement.push(errorElement[i].innerText)
  }
  let checkErrorElement = arrErrorElement.every(value => value === "")
  if (checkErrorElement) {
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let listStudnt = localStorage.getItem("listStudnt") ? JSON.parse(localStorage.setItem("list-student")) : []
    listStudnt.push({
      name: name,
      address: address
    })
    localStorage.setItem("list-student", JSON.stringify(listStudnt))
  }
}
function renderStudent(){
  let listStudnt = localStorage.getItem("listStudnt") ? JSON.parse(localStorage.setItem("list-student")) : []
  let student =
  <tr>
  <th>ID</th>
  <th>ID</th>
  <th>ID</th>
  <th>ID</th>
</tr>
listStudnt.map((value, index)=>{
  student += <tr>
  <td>${index + 1}</td>
  <td>${value.name}</td>
  <td>${value.address}</td>
  <td>
    <buttom>Edit</buttom>
    <buttom>Delete</buttom>
  </td>
  </tr>
})
document.getElementById("tableContent").innerHTML = student
}