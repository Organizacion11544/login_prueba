<nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
    <a class="navbar-brand" href="#"></a>

    <!-- Enlaces del menú -->
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/login_prueba/clientes">Clientes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login_prueba/productos">Productos</a>
            </li>
            <li class="nav-item">
                    <a class="nav-link" href="/login_prueba/clientes/estadistica">Estadistica</a>
            </li>
        </ul>
    </div>
    <a href="/login_prueba/logout" class="btn btn-danger">Cerrar sesión</a>
</nav>
<br>
<h5 class="text-center">Registro de Clientes</h5>
<div class="row justify-content-center mb-5">
    <form class="col-lg-8 border bg-light p-3" id="formularioClientes">
        <input type="hidden" name="cliente_id" id="cliente_id">
        <div class="row mb-3">
            <div class="col">
                <label for="cliente_nombre">Ingrese Nombre Completo del Cliente</label>
                <input type="text" name="cliente_nombre" id="cliente_nombre" class="form-control">
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <label for="cliente_nit">Ingrese el NIT</label>
                <input type="text" name="cliente_nit" id="cliente_nit" class="form-control">
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button type="submit" form="formularioClientes" id="btnGuardar" data-saludo="hola" data-saludo2="hola2" class="btn btn-primary w-100">Guardar</button>
            </div>
            <div class="col">
                <button type="button" id="btnModificar" class="btn btn-warning w-100">Modificar</button>
            </div>
            <div class="col">
                <button type="button" id="btnBuscar" class="btn btn-info w-100">Buscar</button>
            </div>
            <div class="col">
                <button type="button" id="btnCancelar" class="btn btn-danger w-100">Cancelar</button>
            </div>
        </div>
    </form>
</div>

<div class="row justify-content-center">
    <div class="col table-responsive" style="max-width: 80%; padding: 10px;">
        <table id="tablaClientes" class="table table-bordered table-hover">
        </table>
    </div>
</div>

<script src="<?= asset('./build/js/clientes/index.js')  ?>"></script>