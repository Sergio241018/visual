class Usuario{

    constructor(objData){
        this._objUsuario = objData;
    }
    iniciarSesion(){
        let objData = new FormData();
        objData.append("email",this._objUsuario.email);
        objData.append("password",this._objUsuario.password);
        objData.append("iniciarSesion",this._objUsuario.iniciarSesion);

        fetch("control/usuarioControl.php",{
            method : 'POST',
            body: objData
        })
        .then(response => response.json()).catch(error =>{
            console.log(error);
        })
        .then(response =>{
            Toastify({
                text: response["mensaje"],
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
    }
}