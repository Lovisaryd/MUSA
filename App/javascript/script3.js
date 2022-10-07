function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-mode") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark-mode");
  }

 }
 function logoToggle(){
  var element = document.body;
  element.classList.toggle("toggle-logo");
}
(function() {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.body;
  element.classList.add(onpageLoad);
  localStorage.getItem("theme") || "light";
})();

function validateForm(){  
    var name=document.tabletForm.fname.value;  
    var x=document.tabletForm.email1.value;  
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf("."); 

    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
 } 

 function validateFormDesktop(){  
    var name=document.myForm.fname.value;  
    var x=document.myForm.email.value;  
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf("."); 

    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
 } 

 function book(){
     var form = document.getElementById("inquireform");
     form.style.display = "block";
 }
 function hide(){
     var form = document.getElementById("inquireform");
     form.style.display = "none";
 }