let btn = document.getElementById('btn');
document.title = "Login Validator";
function emailvalidators() {
  let email = document.getElementById("email").value;
  let pattren = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let text = document.getElementById("text");
  let heading = document.getElementById("heading").textContent;
  console.log(email.length);
  if (email.match(pattren)) {
    text.innerHTML = "E-mail Address is Valid!";
    text.style.color = "green";
  } else {
    text.innerHTML = "E-mail Address is in-Valid!";
    text.style.color = "red";
  }
}

function passwordValidator() {
  let password = document.getElementById("password").value;
  let text = document.getElementById("text2");
  let regex = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");

  if (regex.test(password)) {
    text.innerHTML = `correct your password length ${password.length}`;
    text.style.color = "green";
  } else {
    text.innerHTML = `incorrect your password length ${password.length}`;
    text.style.color = "red";
  }
}

function submitHandle(e) {
  e.preventDefault();
  console.log('submit')
}

btn.addEventListener("click",submitHandle)
