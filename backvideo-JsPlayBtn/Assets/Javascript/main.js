let vidbg = document.getElementById('bgVid');
let vidBtn = document.getElementById('vid-btn');

// vidBtn.onclick = function(){
//     vidbg.style.display = "block";
// }
// or
vidBtn.onclick = () =>{
    vidbg.style.display = 'block';
    if(vidbg.paused){
        vidbg.play();
        vidBtn.src = './Assets/images/pause.png';
        // vidBtn.classList.add('fa-pause-circle');
    }else{
        vidbg.pause();
        vidBtn.src = './Assets/images/play.png';
        // vidBtn.classList.toggle('fa-play-circle');
    }
}

let sideMenu = document.querySelector('.sidebar')
let menu = document.querySelector('.bars');
let arrow = document.querySelector('.arrow');

menu.onclick = () =>{
    sideMenu.classList.add('active');
}
arrow.onclick = () =>{
    sideMenu.classList.remove('active');
}