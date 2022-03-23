window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


var images = document.getElementsByClassName("image");
var overlay = document.getElementById("overlay");
var body = document.getElementById("body");
var header = document.getElementById("header");
var heroDesc = document.getElementsByClassName("heroDesc");
var heroDescHolder = document.getElementById("heroDescHolder");

var number;
var clone;

//function OpenImage(a)
//{
//      if(images[a].classList.contains("open"))
//      {
//        images[a].classList.remove("open");
//        overlay.style.display = "none";
//        body.style.overflow = "visible";
//        heroDesc[a].style.visibility = "hidden";
//        heroDesc[a].style.fontSize = "0";
//        heroDesc[a].style.margin = "0";
//      }
//      else
//    {
//
//      };
//}

function OpenImage(a)
{
  number = a;
  if (images[number].classList.contains("open"))
  {
    heroDescHolder.removeChild(heroDescHolder.lastChild);
    body.style.overflow = "visible";
    overlay.style.display = "none";
    images[number].classList.remove("open");
    heroDesc[number].style.visibility="hidden";
    heroDesc[number].style.fontSize="0";
    heroDesc[number].style.margin = "0";
  }
  else
  {
    images[number].classList.add("open");
    overlay.style.display = "block";
    body.style.overflow = "hidden";
    heroDesc[number].style.visibility = "visible";
    heroDesc[number].style.fontSize = "2vh";
    heroDesc[number].style.margin = "2vh";
    clone = heroDesc[number].cloneNode(true);
    heroDescHolder.append(clone);
    if (header.classList.contains("sticky"))
    {
      overlay.style.backgroundColor = "white";
    }
    else
    {
      overlay.style.backgroundColor = "black";
    };
  }
}


function CloseImage()
{
  heroDescHolder.removeChild(heroDescHolder.lastChild);
  body.style.overflow = "visible";
  overlay.style.display = "none";
  images[number].classList.remove("open");
  heroDesc[number].style.visibility="hidden";
  heroDesc[number].style.fontSize="0";
  heroDesc[number].style.margin = "0";
}



//function CloseImage()
//{
//  for (i = 0; i<images.length; i++){
//    images[i].classList.remove("open");
//    heroDesc[i].style.visibility="hidden";
//    heroDesc[i].style.fontSize="0";
//    heroDesc[i].style.margin = "0";
//  }
//  body.style.overflow = "visible";
//  overlay.style.display = "none";
//}

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

var bg = document.getElementsByClassName("secBG");
var logo = document.getElementById("kuzi");
var desc = document.getElementById("kuziDesc");

function bgHover()
{
  bg[0].style.opacity = "0.1";
  logo.style.visibility = "visible";
  desc.style.visibility = "visible";
  logo.style.fontSize = "4vw";
  desc.style.fontSize = "1.4vw";
}

function bgUnhover()
{
  bg[0].style.opacity = "1";
  logo.style.visibility = "hidden";
  desc.style.visibility = "hidden";
  logo.style.fontSize = "0";
  desc.style.fontSize = "0";
}
