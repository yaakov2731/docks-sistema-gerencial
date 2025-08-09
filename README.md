# Sistema Gerencial – Docks del Puerto Tigre

Este repositorio contiene un sistema gerencial completo para la administración de locales en el centro comercial **Docks del Puerto Tigre**. El proyecto está desarrollado como una aplicación web estática utilizando HTML5, TailwindCSS, JavaScript y Chart.js; se hospeda en GitHub Pages y utiliza Google Apps Script como backend para almacenar datos en Google Sheets.

## Características principales

- **Dashboard Ejecutivo**: Panel de indicadores con métricas de ocupación, ingresos, gastos operativos y otras KPIs clave.
- **Gestión de Locales**: CRUD completo de locales de inversores y locales propios.
- **Sistema de Expensas**: Cálculo automático de expensas según la superficie de cada local y generación de liquidaciones.
- **Gastos Operativos**: Registro y control presupuestario de gastos del centro comercial.
- **Reclamos y Sugerencias**: Portal de reclamos, asignación y resolución; sistema de sugerencias con seguimiento.
- **Reportes**: Generación de reportes financieros, de ocupación y de gestión.
- **Portal Locatarios**: Acceso para locatarios donde pueden visualizar sus datos y enviar reclamos o sugerencias.
- **Integración con Google Sheets**: Todos los datos se almacenan en un archivo de Google Sheets mediante un API construido con Google Apps Script.

## Instalación rápida

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/[usuario]/docks-sistema-gerencial.git
   cd docks-sistema-gerencial
   ```
2. **Configurar Google Sheets**:
   - Crear un nuevo archivo en Google Sheets llamado *Sistema Docks Puerto Tigre* con cinco hojas: **Locales**, **Expensas**, **Gastos**, **Reclamos** y **Sugerencias**.
   - En Google Sheets selecciona *Extensiones → Apps Script* y crea un nuevo proyecto llamado *Sistema Docks API*.
   - Copia el código del directorio `google-apps-script/codigo-apps-script.js` dentro del editor de Apps Script.
   - Implementa el proyecto como *aplicación web* (Ejecutar como: Tú; Acceso: Cualquiera) y copia la URL de la implementación.

3. **Actualizar URL del Script**:
   - Edita el archivo `index.html` y reemplaza el valor de `SCRIPT_URL` con la URL obtenida en el paso anterior.

4. **Habilitar GitHub Pages**:
   - En la configuración del repositorio activa GitHub Pages seleccionando *Deploy from a branch → main branch / root*. La aplicación estará disponible en `https://[usuario].github.io/docks-sistema-gerencial/`.

Para más detalles consulta la documentación completa en el directorio `docs`.

## Credenciales de acceso (por defecto)

| Usuario    | Contraseña | Rol              |
|-----------|-----------|------------------|
| gerente   | admin123  | Administrador    |
| locatario | local123  | Portal Locatario |

**Nota**: Por seguridad se recomienda cambiar estas credenciales en el código antes de desplegar en producción.

## Documentación

- [Manual de Instalación](docs/INSTALACION.md)
- [Guía de Configuración de Google Sheets](docs/CONFIGURACION_GOOGLE_SHEETS.md)
- [Manual de Usuario](docs/MANUAL_USUARIO.md)

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
