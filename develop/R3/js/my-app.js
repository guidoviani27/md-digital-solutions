let video = document.getElementById("myvideo");
let modal = document.getElementById("mymodal");
let btn = document.getElementById("mybtn");

btn.addEventListener('click', ()=> {
  modal.style.display = "block";
  video.play();
})

addEventListener('click', (e)=> {
  if (e.target == modal) {
    modal.style.display = "none";
    video.pause();
  }
})