// Desplazamiento suave para el enlace de Contacto
document.querySelector('a[href="#footer"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
});

// Interacción del botón del banner
document.querySelector('.banner button').addEventListener('click', () => {
  alert('¡Explora nuestras marcas!');
});