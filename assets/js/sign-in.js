

const email = document.getElementById("email");
const password = document.getElementById("password");

const signInBtn = document.getElementById("sign-in-btn");

function handleSignIn(event) {

  event.preventDefault();

  // Lấy dữ liệu của ô input
  let emailValue = email.value;
  let passwordValue = password.value;
  
  let accountListSaved = JSON.parse(localStorage.getItem("account-list")) || [];
  console.log(accountListSaved);
  for (let i = 0; i < accountListSaved.length; i++) {
    if (emailValue == accountListSaved[i].email && passwordValue == accountListSaved[i].password) {
      alert("Dang nhap thanh cong");

      let userFound = accountListSaved.find((account) => {
        return account.email = emailValue
      });
      
      // userAction.innerHTML = userFound.fullName
      localStorage.setItem("account-login", JSON.stringify(userFound.fullName))
      
      window.location.assign("http://127.0.0.1:5500/index.html"); // Chuyển trang


      return 0; 
    }
  }


  alert("Dang nhap that bai");

}


// bắt sự kiện cho nút đăng ký
signInBtn.addEventListener('click', function(event) {

  // Gọi hàm đăng ký
  handleSignIn(event)
})

