document.getElementById("loginbutton").addEventListener("click", function () {
  // Default Admin Access [Authontication]
  const userGmail = "admin@gmail.com";
  const userPass = "1234";
    // Get User Email
  const loginEmail = document.getElementById("loginemail");
  const givenEmail = loginEmail.value;
//   console.log(givenEmail); // To show in console

  // Get User Password
  const loginPass =  document.getElementById("loginpass");
  const givenPass = loginPass.value;
//   console.log(givenPass); // To show in console

if (givenEmail === userGmail && givenPass === userPass) {
    // console.log("User Admin Success"); // To show in console
    window.location.href = 'home.html'; // To take home page from login page, we can search in Google 'javascript page redirect' to see the code 
} else {
    alert("User Access Denied ");

}
});

