<?php

namespace Controllers;

use Exception;
use Model\Detalle;
use MVC\Router;

class DetalleController
{
    public static function estadistica(Router $router)
    {
        if(isset($_SESSION['auth_user'])){
            $router->render('clientes/estadistica', []);
        }else{
            header('Location: /login_prueba/');
        }
    }

    public static function detalleClientesAPI()
    {

        $sql = "SELECT * FROM clientes WHERE cliente_situacion ='1'; ";

        try {

            $detalles = Detalle::fetchArray($sql);

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