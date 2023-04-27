let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const htmlcssButton = document.getElementById('htmlcssButton');
const htmlcssContent = document.getElementById('htmlcssContent');
let opened = false;

htmlcssButton.addEventListener('click', () => {
    if(opened == false){
        opened = true;
        htmlcssContent.style.maxHeight = '100%'
    } else {
        opened = false;
        htmlcssContent.style.maxHeight = '0px'
    }
})