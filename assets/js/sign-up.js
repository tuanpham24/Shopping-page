

// Lấy ra DOM của các ô input
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dateOfBirth = document.getElementById("date-of-birth");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("password-repeat");

// Lấy DOM của ô đăng ký
const signUpBtn = document.getElementById("sign-up-btn");

// hàm lấy dữ liệu form đăng ký và lưu vào localstorage
function handleSignUp(event) {

  // Ngăn chặn việc tải lại trang khi đăng ký
  event.preventDefault();

  // Lấy dữ liệu của ô input
  let fullNameValue = fullName.value;
  let emailValue = email.value;
  let phoneValue = phone.value;
  let dateOfBirthValue = dateOfBirth.value;
  let passwordValue = password.value;
  let passwordRepeatValue = passwordRepeat.value;
  
  // Nếu chưa điều đủ các trường thì báo lỗi
  if( !fullNameValue || !emailValue || !phoneValue || !dateOfBirthValue || !passwordValue || !passwordRepeatValue) {
    alert("Phải điền đủ các trường!");
    return 0; // Dừng hàm
  }

  // Nếu password mà khác repeat password thì báo lỗi
  if(passwordValue != passwordRepeatValue) {
    alert("Mật khẩu không khớp");
    return 0;
  }

  // Nhóm các thông tin người dùng vào đối tượng userAccount
  let userAccount = {
    fullName: fullNameValue,
    email: emailValue,
    phone: phoneValue,
    dateOfBirth: dateOfBirthValue,
    password: passwordValue
  }

  let accountListSaved = JSON.parse(localStorage.getItem("account-list")) || [];
  
  console.log(accountListSaved);

  accountListSaved.push(userAccount);

  // Lưu userAccount vào localstorage
  localStorage.setItem("account-list", JSON.stringify(accountListSaved));

  alert("Đăng ký thành công!");
  window.location.assign("http://127.0.0.1:5500/sign-in.html")

}


// bắt sự kiện cho nút đăng ký
signUpBtn.addEventListener('click', function(event) {

  // Gọi hàm đăng ký
  handleSignUp(event)
})

