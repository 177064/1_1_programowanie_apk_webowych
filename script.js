(function() {
  // zad1
  var ex1_button = document.getElementById('ex1_button');
  var ex1_content = document.getElementById('ex1_content');

  ex1_button.onclick = function() {

    var tabela = []

    for (var i = 0; i <= 9; i++)
      tabela.push(i);

    ex1_content.innerHTML = tabela.toString();

  }
  // zad2

  var ex2_content = document.getElementById("ex2_content");
  var ex2_text = document.getElementById("ex2_text");
  ex2_text.addEventListener("input", number);

  function number() {

    //ex2_content.innerHTML = "test";

    if (ex2_text.value.length != 9) {
       ex2_content.innerHTML = "Długość numeru musi być równa 9";
    }
    else if (ex2_text.value.match(/[A-Z|a-z]/)) {
      ex2_content.innerHTML = "Numer nie może zawierać liter";
    }
    else if (ex2_text.value.match(/[^0-9]/)) {
        ex2_content.innerHTML = "Numer nie może zawierać znaków specjalnych";
    }
    else if (ex2_text.value.match(/[0-9]/) && ex2_text.value.length == 9) {
        ex2_content.innerHTML = "Numer telefonu jest poprawny";
    }
    else {
      ex2_content.innerHTML = "Numer telefonu nie jest poprawny";
    }

  }




})();
