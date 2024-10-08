<script setup>
import { ref , onMounted} from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import TemplateSelector from './components/TemplateSelector.vue';
import TemplateOne from './layout/one.vue'; // Importar TemplateOne
import TemplateTwo from './layout/two.vue'; // Importar TemplateTwo

import HeaderPluginOne from './components/plugins/HeaderPluginOne.vue'; // Plugin uno
import HeaderPluginTwo from './components/plugins/HeaderPluginTwo.vue'; // Plugin dos


import { useHooks } from './lib/hooks';


const selectedTemplate = ref('one'); // Plantilla por defecto

const getTemplateComponent = () => {
  return selectedTemplate.value === 'one' ? TemplateOne : TemplateTwo;
};


// Registrar plugins en los hooks
onMounted(() => {
  useHooks.addHeaderHook({ component: HeaderPluginOne, id: 'plugin-one' },   { message: 'Plugin #1' });
  useHooks.addHeaderHook({ component: HeaderPluginTwo, id: 'plugin-two' }, { message: 'Plugin #2 (lang)' });
});

</script>

<template>
  <div>
    <TemplateSelector @updateTemplate="selectedTemplate = $event" />
    <!-- Asegúrate de tener un único elemento raíz aquí -->
    <component :is="getTemplateComponent()" />  
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
