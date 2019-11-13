window.onscroll = function(){scrollFunction()};
var header = document.getElementById("header");
var header_wrap = document.getElementsByClassName("header-astro")[0];
var logo_link = document.getElementsByClassName("logo_link")[0];
var nav_icon_link = document.getElementsByClassName("side-menu-icon_link")[0];
var gnb_link = document.getElementsByClassName("gnb_link");

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    header.style.borderBottom = "1px solid #e5e5e5";
    header_wrap.style.backgroundColor = "#ffffff";
    logo_link.style.color = "#1e1e1e";
    nav_icon_link.style.color = "#1e1e1e";
    for(var i = 0; i < gnb_link.length; i++){
      gnb_link[i].style.color = "#1e1e1e";
    }
  }else{
    header.style.border = "none";
    header_wrap.style.backgroundColor = "transparent";
    logo_link.style.color = "#cfcfcf";
    nav_icon_link.style.color = "#efefef";
    for(var i = 0; i < gnb_link.length; i++){
      gnb_link[i].style.color = "#cfcfcf";
    }
  }
}

/* side menu */
var sideMenu = document.getElementById("sideMenu");
var sideMenu_wrap = document.getElementsByClassName("side-menu_wrap")[0];
var sideMenu_link = document.getElementsByClassName("side-menu_link");

for(i = 0; i < sideMenu_link.length; i++)
  sideMenu_link[i].style.display = "none";

function openSideMenu(){
  sideMenu.style.width = "100%";
  sideMenu_wrap.style.width = "100%";
  for(i = 0; i < sideMenu_link.length; i++)
    sideMenu_link[i].style.display = "inline-block";
}

function closeSideMenu(){
  sideMenu.style.width = "0%";
  sideMenu_wrap.style.width = "0%";
  for(i = 0; i < sideMenu_link.length; i++)
    sideMenu_link[i].style.display = "none";
}
