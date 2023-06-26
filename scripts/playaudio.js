// $(document).ready(function() {
//     var audio = new Audio('../audio/leva.mp3');
//     audio.loop = true;
  
//     $(audio).on('canplaythrough', function() {
//       audio.play();
//     });
  
//     $('body').append(audio);
//   });
  

  document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio("../audio/BeStill.mp3");
    audio.loop = true;
  
    audio.addEventListener("canplaythrough", function() {
      audio.play();
    });
  
    document.body.appendChild(audio);
  });
  

  // document.addEventListener("DOMContentLoaded", function() {
  //   var audio = new Audio("../audio/BeStill.mp3");
  //   audio.loop = true;
  
  //   var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  //   if (isMobile) {
  //     audio.addEventListener("canplaythrough", function() {
  //       document.addEventListener("click", playAudio);
  //       document.addEventListener("touchstart", playAudio);
  //     });
  
  //     function playAudio() {
  //       audio.play();
  //       document.removeEventListener("click", playAudio);
  //       document.removeEventListener("touchstart", playAudio);
  //     }
  //   } else {
  //     audio.addEventListener("canplaythrough", function() {
  //       audio.play();
  //     });
  //   }
  
  //   document.body.appendChild(audio);
  // });
  