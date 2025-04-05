let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nava');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');
        if(top>= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots = elem.getAttribute('data-dots');
  var marked = elem.getAttribute('data-percent');
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate =360 / dots;

  for(let i=0; i<dots; i++)
  {
    points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll('.points');
  for(let i=0; i<percent; i++)
  {
    pointsMarked[i].classList.add('marked')
  }
})
function emailSend()
{
 var params ={
  from_name : document.getElementById('fullName').value,
  email_id : document.getElementById('email_id').value,
  number : document.getElementById('number').value,
  subject :  document.getElementById('subject').value,
  message : document.getElementById('message').value,
 }
 emailjs.send("service_2obqv2h", "template_gd2fyqr",params).then(function(res){
  alert("Success!" + res.status);
 })
}