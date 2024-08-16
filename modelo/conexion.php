<?php

class Conexion{

    public static function conectar(){
        $nombreServidor = "localhost";
        $usuarioServidor = "root";
        $baseDatos = "adso";
        $password = "";

        try {
            $objConexion = new PDO('mysql:host='.$nombreServidor.';dbname='.$baseDatos.';', $usuarioServidor, $password);
            $objConexion->exec("set name utf8");
        } catch (Exception $e){
            $objConexion = $e;
        }
        return $objConexion;
    }
}