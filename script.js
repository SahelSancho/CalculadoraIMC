function toggleMenu() {
  var menu = document.getElementById("menu");
  var menuIcon = document.querySelector(".menu-icon");
  menu.classList.toggle("active");

  var isExpanded = menu.classList.contains("active");
  menuIcon.setAttribute("aria-expanded", isExpanded);
}

document.querySelectorAll('#menu a').forEach(function(link) {
  link.addEventListener('click', function() {
      var menu = document.getElementById("menu");
      var menuIcon = document.querySelector(".menu-icon");
      if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          menuIcon.setAttribute("aria-expanded", false);
      }
  });
});

function calcularIMC(event) {
  event.preventDefault();

  var peso = parseFloat(document.getElementById("peso").value);
  var alturaCm = parseFloat(document.getElementById("altura").value);
  var resultado = document.getElementById("resultado");

  if (peso <= 0 || alturaCm <= 0) {
      resultado.innerHTML = "Por favor, insira valores válidos para peso e altura.";
      return;
  }

  var altura = alturaCm / 100;
  var imc = peso / (altura * altura);

  var categoria = '';

  if (imc < 18.5) {
      categoria = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
      categoria = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
      categoria = 'Sobrepeso';
  } else {
      categoria = 'Obesidade';
  }

  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${categoria})`;
}
