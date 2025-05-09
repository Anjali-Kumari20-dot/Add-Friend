let isStatus = document.querySelector("h5");
var btn = document.querySelector("#add");
let check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    isStatus.innerHTML = "Friend Added!";
    isStatus.style.color = "green";
    btn.innerHTML = "Disconnect"
    check = 1;
  }
  else {
    isStatus.innerHTML = "Awaiting Connection";
    isStatus.style.color = "red";
    btn.innerHTML = "Connect Now"
    check = 0;
  }
}); 
