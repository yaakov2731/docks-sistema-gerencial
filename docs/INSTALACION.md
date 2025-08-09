# Manual de Instalación

Este manual describe el proceso para instalar y desplegar el **Sistema Gerencial – Docks del Puerto Tigre** en tu propio entorno.

## 1. Prerrequisitos

- Cuenta de GitHub con permisos para crear repositorios.
- Cuenta de Google con acceso a Google Sheets y Google Apps Script.
- Navegador web moderno.

## 2. Clonación del repositorio

Clona el repositorio desde GitHub y entra en la carpeta del proyecto:

```bash
git clone https://github.com/[usuario]/docks-sistema-gerencial.git
cd docks-sistema-gerencial
```

## 3. Estructura del proyecto

```
docks-sistema-gerencial/
├── index.html
├── README.md
├── docs/
│   ├── INSTALACION.md
│   ├── CONFIGURACION_GOOGLE_SHEETS.md
│   └── MANUAL_USUARIO.md
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
└── google-apps-script/
    └── codigo-apps-script.js
```

Las carpetas `css`, `js` e `img` dentro de `assets` están vacías por defecto y están preparadas para almacenar hojas de estilos adicionales, scripts propios e imágenes si deseas extender el sistema.

## 4. Configuración de GitHub Pages

Para publicar la aplicación en GitHub Pages:

1. Abre la configuración del repositorio.
2. Dirígete a la sección **Pages**.
3. Selecciona *Deploy from a branch* y elige la rama `main` y carpeta `root`.
4. Guarda los cambios y espera unos segundos; la URL de tu sitio será `https://[usuario].github.io/docks-sistema-gerencial/`.

## 5. Configurar Google Sheets y Apps Script

Consulta [CONFIGURACION_GOOGLE_SHEETS.md](CONFIGURACION_GOOGLE_SHEETS.md) para configurar Google Sheets y Apps Script correctamente.

## 6. Actualizar URL del Script

Una vez que tengas la URL del Apps Script, edita `index.html` y sustituye la constante `SCRIPT_URL` por la URL correspondiente. Guarda y sube los cambios a GitHub para que la integración esté activa.

## 7. Cambio de credenciales

Dentro de `index.html` existen credenciales predeterminadas:

- Administrador: usuario **gerente** / contraseña **admin123**
- Locatario: usuario **locatario** / contraseña **local123**

Modifica estas credenciales por otras más seguras antes de poner el sistema en producción.

## 8. Probar la aplicación

Después de desplegar, accede a la URL de GitHub Pages y prueba cada módulo (login, gestión de locales, expensas, reclamos, sugerencias, reportes). Verifica que la escritura y lectura de datos en Google Sheets funciona correctamente.

## 9. Solución de problemas

- **CORS o permisos**: asegúrate de que la aplicación web de Apps Script permita acceso de *Cualquiera*.
- **Errores al guardar datos**: confirma que las hojas en Google Sheets se llaman exactamente *Locales*, *Expensas*, *Gastos*, *Reclamos* y *Sugerencias*.
- **Credenciales incorrectas**: revisa que las credenciales en el código coincidan con las que intentas usar.

Con esto habrás instalado y configurado el sistema gerencial.
