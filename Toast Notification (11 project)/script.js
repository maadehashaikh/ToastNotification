var GreenBtn = document.querySelector(".submitBtn");
let main_div_submit = document.querySelector(".submit_btn");
function submitPopUp(){
  var submitdiv = document.createElement("div");
  submitdiv.classList.add("submitdiv");
  main_div_submit.appendChild(submitdiv);
  let icon = document.createElement("i");
  icon.classList.add("fa-solid" , "fa-circle-check");
  submitdiv.appendChild(icon);
  let PopUp = document.createElement("p");
  PopUp.innerText ="Article Submitted Sucessfully";
  submitdiv.appendChild(PopUp);
  let BottomLine = document.createElement("div");
  BottomLine.classList.add("countdownLine");
  main_div_submit.appendChild(BottomLine);
  RedBtn.disabled = true;
  yellowbtn.disabled = true;
  bluebtn.disabled = true;
    setTimeout(() => {
      RedBtn.disabled = false;
      yellowbtn.disabled = false;
      bluebtn.disabled = false;
    }, 3000);
}

let main_div_failed = document.querySelector(".failed_btn");
var RedBtn = document.querySelector(".failedBtn");
function failedPopUp(){
  let faildiv = document.createElement("div");
  faildiv.classList.add("faildiv"); 
  main_div_failed.appendChild(faildiv);
  let icon = document.createElement("i");
  icon.classList.add("fa-solid" , "fa-circle-exclamation");  
  faildiv.appendChild(icon);
  let PopUp = document.createElement("p");
  PopUp.innerText ="Failed Unexpected Error";
  faildiv.appendChild(PopUp);
  GreenBtn.disabled = true;
  yellowbtn.disabled = true;
  bluebtn.disabled = true;
  setTimeout(() => {
    faildiv.style.display = 'none'; 
    GreenBtn.disabled = false;
    yellowbtn.disabled = false;
    bluebtn.disabled = false;
  }, 3000);
}

var bluebtn = document.querySelector(".InfoBtn");
let main_div_info = document .querySelector(".info_btn");
function InfopopUp(){
  let infodiv = document.createElement("div");
  infodiv.classList.add("infodiv"); 
  main_div_info.appendChild(infodiv);
  let icon = document.createElement("i");
  icon.classList.add("fa-solid" , "fa-circle-info");  
  infodiv.appendChild(icon);
  let PopUp = document.createElement("p");
  PopUp.innerText= "Do Programming and Earn Money";
  infodiv.appendChild(PopUp);
  GreenBtn.disabled = true;
  RedBtn.disabled = true;
  yellowbtn.disabled = true;

  setTimeout(() => {
    infodiv.style.display = 'none'; 
    GreenBtn.disabled = false;
    RedBtn.disabled = false;
    yellowbtn.disabled = false;
  }, 3000);
}

var yellowbtn = document.querySelector(".warningBtn");
let main_div_warning = document .querySelector(".warning_btn");
function WarningpopUp(){
  let warndiv = document.createElement("div");
  warndiv.classList.add("warndiv"); 
  main_div_warning.appendChild(warndiv);
  let icon = document.createElement("i");
  icon.classList.add("fa-solid" , "fa-triangle-exclamation");   
  warndiv.appendChild(icon);
  let PopUp = document.createElement("p");
  PopUp.innerText= "Warning ! Server error";
  warndiv.appendChild(PopUp);
  GreenBtn.disabled = true;
  bluebtn.disabled = true;
  RedBtn.disabled = true;
  setTimeout(() => {
  warndiv.style.display = 'none'; 
  GreenBtn.disabled = false;
  bluebtn.disabled = false;
  RedBtn.disabled = false;
  }, 3000);
}