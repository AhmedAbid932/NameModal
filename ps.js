window.onload = function () {
  main();
};

function main() {
  const reset = document.querySelector("#reset");
  const submit = document.querySelector("#submit");
  const input = document.querySelector(".input_value");
  const output = document.getElementById("output");
  const user_name = document.querySelector(".user_name");

  submit.addEventListener("click", function () {
    if (input.value == "") {
      alert("Please Enter Your Name: _____");
    } else {
      user_name.innerText = input.value;
      output.style.display = "block";
    }
  });

  reset.addEventListener("click", function () {
    user_name.innerText = "";
    input.value = "";
    output.style.display = "none";
  });
}
