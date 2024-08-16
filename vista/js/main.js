(function () {
    let btnAlerta1 = document.getElementById('btnAlerta1');
    btnAlerta1.addEventListener('click', () => {
        Swal.fire({
            title: "Waos",
            text: "En efecto ya sabia",
            imageUrl: "https://i.ytimg.com/vi/BcFceM_d1gE/maxresdefault.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: ":3"
        });
    })

    let btnAlerta2 = document.getElementById('btnAlerta2');
    btnAlerta2.addEventListener('click', () => {
        Toastify({
            text: "This is a toast",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {
                Swal.fire({
                    title: "De hecho",
                    text: "🤓☝",
                    imageUrl: "https://pbs.twimg.com/media/FymXdBxXoBccAPF.jpg",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: ":3"
                });
            } // Callback after click
        }).showToast();
    })

    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('#formLogin')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault()
                if (!form.checkValidity()) {
                    event.stopPropagation()
                    form.classList.add('was-validated')
                }else{
                    let email = document.getElementById('txt-usuario').value;
                    let password = document.getElementById('txt-password').value;
                    let objData = {"iniciarSesion":"ok","email":email,"password":password};
                    let objUsuario = new Usuario(objData);
                    objUsuario.iniciarSesion();
                }
            }, false)
        })

})()