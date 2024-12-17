
// In the last cohort we had spent some time on local storage so I had added this to show that I understood the concept.

export function bfSaveUser() {
  let hfUserToken = document.getElementById("hfTokenInput");
  let inputName = document.getElementById("nameInput");
  let inputEmail = document.getElementById("emailInput");
  let hfToken = hfUserToken.value;
  let handleName = inputName.value;
  let handleEmail = inputEmail.value;
  localStorage.setItem("userName", handleName);
  localStorage.setItem("userEmail", handleEmail);
  localStorage.setItem("oaiToken", hfToken);
  let userNameHandle = document.getElementById("userNameHTML")
  let userEmailHandle = document.getElementById("userEmailHTML")
  let userNameJs = localStorage.getItem("userName");
  let userEmailJs = localStorage.getItem("userEmail");
  userNameHandle.innerHTML = userNameJs;
  userEmailHandle.innerHTML = userEmailJs;
}