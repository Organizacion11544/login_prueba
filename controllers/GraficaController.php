<?php

namespace Controllers;

use Exception;
use Model\Grafica;
use MVC\Router;

class GraficaController
{
    public static function grafica(Router $router)
    {
        if(isset($_SESSION['auth_user'])){
            $router->render('productos/grafica', []);
        }else{
            header('Location: /login_prueba/');
        }
    }

    public static function detalleProductosAPI()
    {

        $sql = "SELECT * FROM productos WHERE producto_situacion ='1'; ";

        try {

            $detalles = Grafica::fetchArray($sql);

            echo json_encode($detalles);
        } catch (Exception $e) {
            echo json_encode([
                'detalle' => $e->getMessage(),
                'mensaje' => 'Ocurrió un error',
                'codigo' => 0
            ]);
        }
    }
}