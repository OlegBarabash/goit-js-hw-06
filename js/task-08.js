const listenForm = document.querySelector('.login-form')
const userData = {}

listenForm.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
     const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
    userData.email = email.value
    userData.password = password.value
    console.log(userData);
    
    event.currentTarget.reset();
}

