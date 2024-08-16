<?php
include_once "conexion.php";
class usuarioModelo{

    public static function mdlIniciarSesion($email,$password){
        $mensaje = array();
        try {
            $objRespuesta = Conexion::conectar()->prepare("SELECT * FROM usuario WHERE email=:email AND password=:password");
            $objRespuesta->bindParam(":email",$email);
            $objRespuesta->bindParam(":password",$password);
            $objRespuesta->execute();
            $objUsuario = $objRespuesta->fetch();
            if($objUsuario !=null){
                $mensaje = array("codigo"=>"200","mensaje"=>"el usuario existe en la base de datos"());
            }else{
                $mensaje = array("codigo"=>"401","mensaje"=>"el usuario no existe en la base de datos"());
            }
            $objRespuesta = null;

        } catch (Exception $e) {
            $mensaje = array("codigo"=>"401","mensaje"=>$e->getMessage());
        }
        
        return ($mensaje);
    }
}
