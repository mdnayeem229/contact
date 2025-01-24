
//---------start mobile menu-------//
var icon = document.querySelector('.menu')
var bars = icon.querySelector('.fa-bars');
var listmenu = document.querySelector('#listmenu');

icon.onclick = function(){
    if(listmenu.style.maxHeight =="200px"){
listmenu.style.maxHeight ="0px";
bars.classList.contains('fa-bars');
bars.classList.replace('fa-times', 'fa-bars');
    }
    else{
        listmenu.style.maxHeight="200px";
        bars.classList.replace('fa-bars', 'fa-times');
  
    }
}
var privacy = document.querySelector('.privacy');
function openPopup(){
    privacy.classList.add('privacy-active');
}
function closePopup(){
    privacy.classList.remove('privacy-active');
}
function btn(){
    const fname = document.getElementById('fname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const fName1 = document.getElementById('fName1');
  const email1 = document.getElementById('email1');
  const phone1 = document.getElementById('phone1');
  const middle = document.getElementById('middle');
  const close = document.getElementById('close');
  if(fname.value === '' || email.value === '' || phone.value === ''){
    middle.style.display = 'none';
  }
  else{
    middle.style.display = 'block'
  }
  close.onclick = function(){
    middle.style.display = 'none';
  }
  
  
  
  event.preventDefault();
  if(fname.value == ''){
  fName1.innerHTML = 'Enter Your Name?';
  fName1.style.color = 'red';
  }
  else{
    fName1.innerHTML = 'Good Name';
    fName1.style.color = 'green';
  }
  if(email.value == ''){
  email1.innerHTML = 'Enter Your  Email?';
  email1.style.color = 'red';
  }
  else{
    email1.innerHTML = 'Good Email';
    email1.style.color = 'green';
  }
  if(phone.value == ''){
  phone1.innerHTML = 'Enter Your Phone Number?';
  phone1.style.color = 'red';
  }
  else{
    phone1.innerHTML = 'Good Number';
  phone1.style.color = 'green';
  }
  
  
  }
  
  








