let keys = document.getElementsByClassName("key");

      for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", myfunction);
      }
      function myfunction() {
        this.classList.add("scale");
        let audioElement = this.getElementsByTagName("audio");
        if (audioElement.length > 0) {
          audio = audioElement[0];
          audio.play();
          const checklist = this;
          setTimeout(function () {
            checklist.classList.remove("scale");
            audio.pause();
            audio.currentTime = 0;
          }, 210);
        }
      }