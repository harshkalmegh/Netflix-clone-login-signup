function validateForm() {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("password").value;
  if (username == "" || password == "") {
    alert("Fields should not be Blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  return true;
}
function passvalues() {
  if (!validateForm()) {
    return false;
  }
  var username = document.getElementById("uname").value;
  localStorage.setItem("textvalue", username);
  return true;
}