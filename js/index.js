window.onload = function () {
  window.scrollBy(0, 0);
  let header = document.getElementsByTagName("header")[0];
  header.style.transform = 'rotateX(0deg)';

  let time = getComputedStyle(document.documentElement).getPropertyValue('--time_scale');
  time = time.slice(0, -1).trim();
  setTimeout(() => {
    document.getElementsByClassName("header_info")[0].classList.toggle("header_info-anim");
  }, time * 1000);
  setTimeout(() => {
    document.getElementById("name").style.transform = "translateX(0%)";
  }, time * 1000);
  setTimeout(() => {
    document.getElementById("address").style.transform = "translateX(0%)";
  }, time * 1100);
  setTimeout(() => {
    document.getElementById("phone").style.transform = "translateX(0%)";
  }, time * 1200);
}