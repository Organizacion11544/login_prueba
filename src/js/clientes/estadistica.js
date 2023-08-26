import Chart from "chart.js/auto";
import { Toast } from "../funciones";

const canvas = document.getElementById('chartVentas');
const context = canvas.getContext('2d');

const chartClientesDoughnut = new Chart(context, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Clientes',
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
                text: 'Distribución de Clientes'
            }
        }
    }
});

const getEstadisticasClientesDoughnut = async () => {
    const url = `/login_prueba/API/clientes/estadistica`;
    const config = {
        method: 'GET'
    };

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        console.log(data);

        chartClientesDoughnut.data.labels = [];
        chartClientesDoughnut.data.datasets[0].data = [];
        chartClientesDoughnut.data.datasets[0].backgroundColor = [];

        if (data) {
            data.forEach(registro => {
                chartClientesDoughnut.data.labels.push(registro.cliente_nombre);
                chartClientesDoughnut.data.datasets[0].data.push(1); // Cada cliente es 1 parte
                chartClientesDoughnut.data.datasets[0].backgroundColor.push(getRandomColor());
            });

            // Actualizar el título para mostrar la cantidad de clientes
            chartClientesDoughnut.options.plugins.title.text = `Doughnut Chart - ${data.length} Clientes`;
        } else {
            Toast.fire({
                title: 'No se encontraron registros',
                icon: 'info'
            });

            // Restaurar el título si no hay datos
            chartClientesDoughnut.options.plugins.title.text = 'Doughnut Chart - Distribución de Clientes';
        }

        chartClientesDoughnut.update();
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

getEstadisticasClientesDoughnut();

