const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

// Revisa si hay un valor en localStorage para el modo oscuro
const darkModePreference = localStorage.getItem('dark-mode') === 'true';

if (darkModePreference) {
    document.body.classList.add('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.add('active');
    darkMode.querySelector('span:nth-child(2)').classList.remove('active');  // Aseguramos que el otro botón no tenga 'active'
}

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    // Cambiar el modo oscuro
    const isDarkMode = document.body.classList.toggle('dark-mode-variables');
    
    // Actualizar los botones
    const span1 = darkMode.querySelector('span:nth-child(1)');
    const span2 = darkMode.querySelector('span:nth-child(2)');
    
    span1.classList.toggle('active', isDarkMode);  // Si está en modo oscuro, 'span1' tiene 'active'
    span2.classList.toggle('active', !isDarkMode);  // Si no está en modo oscuro, 'span2' tiene 'active'

    // Guardar la preferencia en localStorage
    localStorage.setItem('dark-mode', isDarkMode);
});


const Orders = [
    {
        productName: 'Mouse para computadora',
        productNumber: '12345',
        paymentStatus: 'Pendiente',
        status: 'Pendiente'
    },
    {
        productName: 'Soporte para celular',
        productNumber: '78901',
        paymentStatus: 'Devolución',
        status: 'Declinado'
    },
    {
        productName: 'Teclado',
        productNumber: '87348',
        paymentStatus: 'Pagado',
        status: 'Activo'
    },
]