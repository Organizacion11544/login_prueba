const formLogin = document.querySelector('form');
const closeSessionRequest = async e => {
    e.preventDefault();
    try {
        const url = "/login_prueba/API/closeSession"; 
        const headers = new Headers();
        headers.append("X-Requested-With", "fetch");
        const config = {
            method: 'GET',
            headers
        };
        const respuesta = await fetch(url,config);  
        window.location.href = '/login_prueba/';   
    } catch (error) {
        console.log(error);
    }
}
formLogin.addEventListener('submit', closeSessionRequest);