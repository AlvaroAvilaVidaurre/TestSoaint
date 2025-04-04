# Playwright Cucumber Test

Este proyecto utiliza **Playwright** y **Cucumber** para realizar pruebas automatizadas de extremo a extremo (E2E) en la aplicación web de **Sauce Labs**. Las pruebas incluyen escenarios de inicio de sesión exitoso, fallido y la manipulación de elementos en la página de inventario.

## Características

- **Pruebas de inicio de sesión**:
  - Inicio de sesión exitoso con credenciales válidas.
  - Manejo de errores para credenciales inválidas, campos vacíos y usuarios bloqueados.
- **Pruebas de la página de inventario**:
  - Agregar y eliminar productos del carrito.
  - Verificación de la actualización del contador del carrito.
- **Uso de Playwright** para la automatización del navegador.
- **Uso de Cucumber** para escribir pruebas en formato Gherkin.

---

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

---

## Instalación

Sigue estos pasos para configurar el proyecto desde cero:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/AlvaroAvilaVidaurre/TestSoaint.git
   cd TestSoaint

2. Instala las dependencias del proyecto:
  ``` npm install ```

3. Instala los navegadores necesarios para Playwright:
  ``` npx playwright install ```

## Tecnologías utilizadas
- Playwright: Framework para pruebas automatizadas en navegadores.
- Cucumber: Herramienta para pruebas basadas en comportamiento (BDD).
- TypeScript: Lenguaje de programación utilizado para las definiciones de pasos.

