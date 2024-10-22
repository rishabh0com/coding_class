//  <!-- https://www.w3schools.com/js/pic_bulboff.gif -->
//                    <!-- https://www.w3schools.com/js/pic_bulbon.gif -->

const onBtn = document.getElementById("on");
const offBtn = document.getElementById("off");
const img = document.getElementById("bulbImg");

onBtn.addEventListener("click", () => {
  img.src = "https://www.w3schools.com/js/pic_bulbon.gif";
});

offBtn.addEventListener("click", () => {
  img.src = "https://www.w3schools.com/js/pic_bulboff.gif ";
});
