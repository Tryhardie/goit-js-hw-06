const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userData = { email: email.value, password: password.value };

  console.log(userData);
  event.currentTarget.reset();
}
