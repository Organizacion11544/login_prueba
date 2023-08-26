import Chart from "chart.js/auto";
import { Toast } from "../funciones";

const canvas = document.getElementById('chartPrecios');
const context = canvas.getContext('2d');

const chartProductosBar = new Chart(context, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Productos',
                data: [],
                backgroundColor: []
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Barras - Precios de Productos'
            }
        }
    }
});

const getGraficasProductosBar = async () => {
    const url = `/login_prueba/API/productos/grafica`;
    const config = {
        method: 'GET'
    };

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        console.log(data);

        chartProductosBar.data.labels = [];
        chartProductosBar.data.datasets[0].data = [];
        chartProductosBar.data.datasets[0].backgroundColor = [];

        if (data) {
            data.forEach(producto => {
                chartProductosBar.data.labels.push(producto.producto_nombre); // Agregar el nombre del producto
                chartProductosBar.data.datasets[0].data.push(producto.producto_precio);
                chartProductosBar.data.datasets[0].backgroundColor.push(getRandomColor());
            });

            // Actualizar el título para mostrar la cantidad de productos
            chartProductosBar.options.plugins.title.text = `Gráfico de Barras - ${data.length} Productos`;
        } else {
            Toast.fire({
                title: 'No se encontraron registros',
                icon: 'info'
            });

            // Restaurar el título si no hay datos
            chartProductosBar.options.plugins.title.text = 'Gráfico de Barras - Precios de Productos';
        }

        chartProductosBar.update();
    } catch (error) {
        console.log(error);
    }
};

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgba(${r},${g},${b},0.7)`;
    return rgbColor;
};

getGraficasProductosBar();
