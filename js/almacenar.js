document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor');
    const agregarBtn = document.getElementById('agregar');
    const limpiarBtn = document.getElementById('limpiar');
    const itemInput = document.getElementById('item');
  
    // Cargar el listado desde localStorage al cargar la página
    const cargarListado = () => {
      const listado = JSON.parse(localStorage.getItem('listado')) || [];
      contenedor.innerHTML = '';
      listado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        contenedor.appendChild(li);
      });
    };
  
    // Agregar un nuevo ítem al listado
    const agregarItem = () => {
      const item = itemInput.value.trim();
      if (item) {
        const listado = JSON.parse(localStorage.getItem('listado')) || [];
        listado.push(item);
        localStorage.setItem('listado', JSON.stringify(listado));
        cargarListado();
        itemInput.value = '';
      }
    };
  
    // Limpiar el listado almacenado
    const limpiarListado = () => {
      localStorage.removeItem('listado');
      cargarListado();
    };
  
    // Event listeners
    agregarBtn.addEventListener('click', agregarItem);
    limpiarBtn.addEventListener('click', limpiarListado);
  
    // Cargar el listado al iniciar
    cargarListado();
  });
  