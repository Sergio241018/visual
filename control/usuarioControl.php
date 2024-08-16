<?php
include_once "../modelo/usuarioModelo.php";
class UsuarioControl{
    public $email;
    public $password;

    public function ctrIniciarSesion(){
        $objRespuesta = UsuarioModelo::mdlIniciarSesion($this -> email, $this -> password);
        echo json_encode($objRespuesta);
    }
}

if(isset($_POST["iniciarSesion"])=="ok"){

    $objUsuario = new UsuarioControl();
    $objUsuario->email = $_POST["email"];
    $objUsuario->password = $_POST["password"];
    $objUsuario->ctrIniciarSesion();

}