// hooks.js
import { reactive } from 'vue';

const hooks = reactive({
  header: [],
});

const useHooks = {
    addHeaderHook(component, params) {
        hooks.header.push({ component, params }); // Almacena el componente y sus parámetros
      },
  getHeaderHooks() {
    return hooks.header;
  },
};

export { useHooks };
