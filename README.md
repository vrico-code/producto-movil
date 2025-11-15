Proyecto Móvil – Entregable 1

Desarrollo de Aplicación Móvil con Expo y React Native.

Integrante

vrico-code (tu nombre)

1. Descripción del Proyecto

Este proyecto corresponde al Entregable 1 del curso de Aplicaciones Móviles.
El objetivo es iniciar la construcción del producto móvil utilizando Expo y React Native, siguiendo buenas prácticas de organización del código, componentes reutilizables y manejo de control de versiones.

La aplicación actualmente incluye:

Una pantalla de bienvenida.

Un componente reutilizable de tipo FAB (Floating Action Button).

Un hook personalizado llamado useCounter.

Estilos básicos.

Estructura modular lista para futuras ampliaciones.

2. Estructura del Proyecto
producto-movil/
 ├ App.tsx
 ├ package.json
 ├ tsconfig.json
 ├ src/
 │   ├ components/
 │   │   └ FAB.tsx
 │   ├ screens/
 │   │   └ WelcomeScreen.tsx
 │   ├ hooks/
 │   │   └ useCounter.ts
 │   ├ services/        (vacío por ahora)
 │   └ utils/           (vacío por ahora)

3. Componentes Implementados
FAB (Floating Action Button)

Componente reutilizable ubicado en src/components/FAB.tsx.
Características:

Propiedad label.

Soporte para onPress.

Soporte para onLongPress.

Propiedad opcional position (left o right).

Estilos básicos.

4. Hooks Implementados
useCounter

Hook personalizado ubicado en src/hooks/useCounter.ts.
Funciones:

count: valor del contador.

increment(): incrementa el contador.

reset(): reinicia al valor inicial.

Valor inicial configurable.

5. Pantallas Implementadas
WelcomeScreen

Pantalla inicial ubicada en src/screens/WelcomeScreen.tsx.
Incluye:

Título de bienvenida.

Contador dinámico.

FAB con función de incrementar y resetear.

6. Scripts del Proyecto

Para ejecutar la aplicación:

npx expo start


Para borrar caché y reiniciar:

npx expo start --clear


Los modos disponibles al ejecutar Expo:

Presionar “Shift + T” para modo tunnel.

Presionar “Shift + L” para modo LAN.

Presionar “Shift + W” para modo web.

7. Control de Versiones (Ramas del Proyecto)

Las ramas configuradas son:

main: rama principal.

test: rama para pruebas.

dev: rama principal de desarrollo.

dev-vrico: rama personal para desarrollo del estudiante.

El flujo esperado es trabajar sobre la rama personal y luego realizar pull requests hacia la rama dev.

8. Pruebas Realizadas

La aplicación se ejecutó correctamente con npx expo start.

Se probó el modo tunnel mediante Shift + T.

La pantalla WelcomeScreen carga correctamente al iniciar.

El FAB incrementa el contador de manera adecuada.

La función reset se activa al mantener presionado el FAB.

No se registran errores en consola ni en Metro Bundler.

9. Funcionalidades Planeadas (Siguiente Sprint)

Implementar pantalla de inicio de sesión (Login).

Implementar sistema de navegación mediante React Navigation.

Crear un componente Input reutilizable.

Crear una pantalla Dashboard.

Implementar manejo de estado global mediante Context API.

Integrar servicios (API).

Mejorar la apariencia visual de la aplicación.

10. Colaborador Docente

El repositorio ha sido compartido con el correo del docente:

victorpinto@unimayor.edu.co

11. Estado del Entregable

Proyecto creado con Expo.

Estructura de carpetas implementada.

Pantalla inicial funcional.

Componente FAB implementado.

Hook personalizado useCounter implementado.

Proyecto probado en dispositivo físico mediante Expo Go.

Repositorio GitHub configurado y funcionando.

Ramas creadas según lineamientos del curso.

README completado con la documentación solicitada.
