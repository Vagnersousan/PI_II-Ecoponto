$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();
        $.ajax({
            type: 'POST',
            url: 'validar_login.php',
            data: {email: email, senha: password},
            success: function(response) {
                $('#loginMessage').text(response);
                if (response === 'Usuário logado com sucesso!') {
                    setTimeout(function() {
                        window.location.href = 'index.html';
                    }, 2000);
                }
            },
            error: function() {
                $('#loginMessage').text('Erro ao fazer login. Por favor, tente novamente.');
            }
        });
    });
});

// Script jQuery para mostrar/esconder senha
$("#togglePassword").click(function () {
    var input = $("#inputSenha");
    var showIcon = $("#togglePassword");
    var hideIcon = $("#hidePassword");
    if (input.attr("type") === "password") {
        input.attr("type", "text");
        showIcon.hide();
        hideIcon.show();
    } else {
        input.attr("type", "password");
        hideIcon.hide();
        showIcon.show();
    }
});

function LoginWithReplit() {
  window.addEventListener("message", authComplete);
  var h = 500;
  var w = 350;
  var left = screen.width / 2 - w / 2;
  var top = screen.height / 2 - h / 2;
  var authWindow = window.open(
    "https://replit.com/auth_with_repl_site?domain=" + location.host,
    "_blank",
    "modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );
  function authComplete(e) {
    if (e.data !== "auth_complete") {
      return;
    }
    window.removeEventListener("message", authComplete);
    authWindow.close();
    location.reload();
  }
}