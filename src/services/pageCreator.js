import fs from 'fs';  // Node.js file system module

// Ruta donde se generarán las nuevas páginas
const pagesDirectory = './src/views/';

// Función que crea una nueva página
export const createPage = (pageName, components) => {
  const pageTemplate = `
<template>
  <div>
    <h1>${pageName}</h1>
    ${components.map(component => `<${component} />`).join('\n    ')}
  </div>
</template>

<script>
export default {
  name: '${pageName}',
};
</script>

<style scoped>
/* Estilos personalizados para la página ${pageName} */
</style>
`;

  const filePath = `${pagesDirectory}${pageName}.vue`;
  
  // Guardar la página en el directorio 'views'
  fs.writeFileSync(filePath, pageTemplate, 'utf8');
  
  console.log(`Página ${pageName} creada con éxito en ${filePath}`);
};
