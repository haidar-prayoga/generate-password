const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const saveButton = document.getElementById("saveButton");
const icon = document.querySelector("#icon");
let passwordLength = document.querySelector("#passwordLength");

togglePassword.addEventListener("click", function (e) {
  // Toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Toggle the eye / eye-slash icon
  icon.classList.toggle("bi-eye");
  icon.classList.toggle("bi-eye-slash");
});

const generatePassword = (len) => {
  const lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbols = "!@#$%^&*()";
  const data = lowerAlphabets + upperAlphabets + numeric + symbols;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
};

const savePassword = () => {
  document.title = password.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`Password saya: ${document.title}`)
  );
  saveButton.setAttribute("download", "MyPasswordGenerated.txt");
  setTimeout(() => {
    alert("password has been saved");
  }, 2000);
};
