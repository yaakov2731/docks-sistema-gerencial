# Manual de Usuario – Sistema Gerencial Docks del Puerto Tigre

Este manual explica cómo utilizar cada sección del sistema gerencial. El sistema está diseñado como una aplicación web de una sola página (SPA) y puede accederse desde cualquier navegador moderno.

## 1. Inicio y acceso

1. Abre la URL del sistema publicada en GitHub Pages.
2. Se mostrará una pantalla de inicio de sesión. Introduce tu nombre de usuario y contraseña:
   - **Administrador/Gerente:** usuario `gerente`, contraseña `admin123`
   - **Portal de locatarios:** usuario `locatario`, contraseña `local123`
3. Al iniciar sesión correctamente se mostrará el menú principal y el dashboard ejecutivo.

## 2. Navegación general

- El menú lateral permite acceder a las diferentes secciones (Locales, Expensas, Gastos, Reclamos, Sugerencias, Reportes).
- En la parte superior se encuentran accesos rápidos a notificaciones y perfil.
- El sistema está optimizado para dispositivos móviles y tablets; los menús pueden plegarse automáticamente en pantallas pequeñas.

## 3. Gestión de locales

Esta sección permite crear, consultar, actualizar y eliminar locales tanto de inversores como propios.

1. **Listar locales:** muestra una tabla con todos los locales. Puedes filtrar por tipo, estado u otros campos.
2. **Agregar local:** utiliza el botón “Nuevo local” para registrar un nuevo local, indicando datos como inversor/propio, superficie, estado, etc.
3. **Editar local:** haz clic en el ícono de edición junto al registro para modificar los datos.
4. **Eliminar local:** usa el ícono de basura para eliminar un registro. El sistema pedirá confirmación antes de borrarlo.

## 4. Sistema de expensas

En esta vista se calculan y se liquidan las expensas de cada local según su superficie y categoría.

1. Selecciona un periodo (mes/año) y haz clic en **Calcular expensas**. 
2. El sistema obtiene la información de Google Sheets y calcula automáticamente el monto correspondiente.
3. Puedes exportar la liquidación a un archivo o imprimirla para distribuirla a los locatarios.

## 5. Gastos operativos

Permite registrar y controlar los gastos operativos del centro comercial.

- Para **registrar un gasto**, introduce la categoría, el concepto, el importe y la fecha.
- Los gastos se reflejan en el dashboard y ayudan a comparar contra el presupuesto mensual.

## 6. Sistema de reclamos

Facilita la recepción y seguimiento de reclamos de los locatarios.

1. **Crear reclamo:** los locatarios pueden enviar un reclamo desde su portal o el administrador puede registrarlo manualmente.
2. **Asignar reclamo:** asigna cada reclamo a un responsable para su solución.
3. **Cambiar estado:** actualiza el estado a “En progreso”, “Resuelto” o “Cerrado” según avance.

## 7. Sistema de sugerencias

Funciona de manera similar a los reclamos, pero orientado a sugerencias y mejoras.

1. **Enviar sugerencia:** cualquier usuario puede enviar sugerencias.
2. **Evaluar:** el administrador revisa las sugerencias y decide si se implementan.
3. **Implementar:** marca como implementadas las sugerencias aprobadas.

## 8. Reportes y dashboard

La sección de reportes genera gráficos y tablas con información clave:

- **Ocupación de locales** (inversores vs propios).
- **Ingresos y gastos operativos**.
- **Expensas pendientes y pagadas**.
- **Indicadores de reclamos y sugerencias**.

Puedes seleccionar rangos de fechas y exportar los datos en formatos CSV o PDF.

## 9. Portal de locatarios

El portal de locatarios está disponible para los inquilinos. Desde allí pueden:

- Ver sus datos de local y estado de cuenta.
- Registrar reclamos y sugerencias.
- Consultar expensas emitidas y descargarlas.

## 10. Preguntas frecuentes

- **¿Cómo cambio mi contraseña?** Actualmente las credenciales están fijas en el código, pero puedes modificar estos valores dentro del archivo `index.html`. En futuras versiones se implementará la gestión de usuarios.
- **¿Qué pasa si la API de Google Sheets no responde?** Verifica que el proyecto de Apps Script esté publicado y que la URL de `SCRIPT_URL` sea correcta. Asegúrate de haber concedido permisos de acceso público.
- **¿Se pueden agregar más hojas o columnas?** Sí, pero deberás ajustar el código de Apps Script y del frontend para manejar las nuevas estructuras.

Este manual cubre las funcionalidades principales del sistema. Si encuentras algún error o tienes dudas adicionales, consulta el apartado de troubleshooting en la documentación de instalación.
