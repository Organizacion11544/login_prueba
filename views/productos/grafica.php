<nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
    <a class="navbar-brand" href="#"></a>

    <!-- Enlaces del menú -->
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/login_prueba/productos">Productos</a>
            </li>
            <li class="nav-item">
                    <a class="nav-link" href="/login_prueba/productos/grafica">Grafica</a>
            </li>
        </ul>
    </div>
    <a href="/login_prueba/logout" class="btn btn-danger">Cerrar sesión</a>
</nav>
<br>
<h5>Productos</h5>

<div class="row">
    <div class="col-lg-5">
        <canvas id="chartPrecios" width="100%"></canvas>
    </div>
</div>
<script src="<?=asset('./build/js/productos/grafica.js') ?>"></script>
