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
  