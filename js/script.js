// showMenu(menu);

window.addEventListener("scroll", () => {
  const nav = document.getElementById("menuneonlogo");
  const box = document.getElementById("neonlogobox");
  if (window.scrollY >= 190) {
    box.style.margin = "auto";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.justifyContent = "space-between";
    nav.style.position = "fixed";
    nav.style.margin = "auto";
    nav.style.maxWidth = "400px";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-around";
    nav.style.alignItems = "center";
    nav.style.zIndex = "1";
    nav.style.transitionDuration = "300ms";
    nav.style.backgroundImage = "url(../img/black-background.jpeg)";
  } else if (window.scrollY <= 200) {
    nav.style.position = "relative";
    nav.style.transitionDuration = "0ms";
  }
});

document.getElementById("btn").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  nav.style.visibility = "visible";
  nav.style.height = "auto";
  nav.style.marginBottom = "30px";
  nav.style.marginTop = "20px";
  nav.style.fontSize = "1.5rem";
  nav.style.width = "90%";
});

// // document.getElementById("btn").addEventListener("click", function () {
// //   let MenuBtn = document.getElementById("btn");
// //   MenuBtn.style.visibility = "hidden";
// // });

document.getElementById("close").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  nav.style.visibility = "hidden";
  nav.style.height = "0px";
  nav.style.width = "0px";
  nav.style.marginBottom = "0px";
  nav.style.marginTop = "0px";
});

// function showMenu(showMenu) {
//   let btn = document.getElementById("btn");
//   let close = document.getElementById("close");
//   if (btn.addEventListener("click")) {
//     nav.style.visibility = "visible";
//   } else if (close.addEventListener("click")) {
//     nav.style.visibility = "hidden";
//   } else {
//     console.log("no click");
//   }
// }
