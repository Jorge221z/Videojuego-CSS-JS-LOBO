var block = document.getElementById("block");
var character = document.getElementById("character");
var counter = 0; // Contador de puntos

function jump() {
  if (!character.classList.contains("jumping")) {
    character.classList.add("jumping");
  }

  setTimeout(function () {
    character.classList.remove("jumping");
  }, 500);
}

var checkDeath = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
    if (blockLeft < 90 && blockLeft > -10 && characterTop >= 71) {
      block.style.animation = "none"; // Detiene la animación
  
      alert('Lobo muerto! Score: ' + Math.floor(counter / 100));
      
      counter = 0; // Reinicia el contador
      
      setTimeout(() => {
        block.style.animation = "block 1s linear infinite"; // Reinicia la animación después de un breve retraso
      }, 100);
    } else {
      counter++;
      document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
  }, 10);
  
  // Evento para detectar salto
  document.body.addEventListener("keydown", (k) => {
    if (k.code === "Space") {
      jump();
    }
  });
  
