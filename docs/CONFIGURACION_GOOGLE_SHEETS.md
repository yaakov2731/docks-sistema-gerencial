# Configuración de Google Sheets y Google Apps Script

Para que el sistema gerencial funcione correctamente es necesario crear un archivo de Google Sheets que hará de base de datos y un proyecto de Google Apps Script que exponga una API REST.

## 1. Crear la hoja de cálculo

1. Accede a [Google Sheets](https://sheets.google.com) con tu cuenta de Google.
2. Crea una nueva hoja de cálculo con el nombre **Sistema Docks Puerto Tigre**.
3. En esa hoja crea exactamente cinco pestañas (hojas) con los siguientes nombres:
   - **Locales**
   - **Expensas**
   - **Gastos**
   - **Reclamos**
   - **Sugerencias**

El código del sistema está preparado para leer y escribir en estas hojas, por lo que deben escribirse exactamente como se indica, respetando mayúsculas y minúsculas. En cada pestaña puedes agregar títulos en la primera fila para identificar las columnas (por ejemplo, “ID”, “Nombre”, “Estado”, etc.).

## 2. Configurar Google Apps Script

1. Abre la hoja de cálculo recién creada y selecciona **Extensiones → Apps Script**.
2. Se abrirá el editor de Google Apps Script. Elimina cualquier función pre‑existente.
3. En el archivo **`codigo-apps-script.js`** de este repositorio encontrarás el código necesario para el backend. Copia ese código y pégalo en el editor de Apps Script.
4. Asigna un nombre al proyecto, por ejemplo **Sistema Docks API**, y guarda los cambios.

### Publicar como aplicación web

1. En el editor de Apps Script selecciona **Implementar → Nueva implementación**.
2. Elige el tipo **Aplicación web**.
3. Configura los siguientes parámetros:
   - **Nombre de implementación:** API del Sistema Docks.
   - **Descripción:** Versión inicial de la API.
   - **Ejecutar como:** Tu cuenta (la cuenta que creó el script).
   - **Acceso:** **Cualquiera** (esto permite que el sistema desde GitHub Pages pueda acceder a la API).
4. Haz clic en **Implementar**. Es posible que se soliciten permisos; concédelos.
5. Copia la **URL de la aplicación web** que se muestra después de la implementación. Esta URL será el endpoint de la API.

## 3. Actualizar el archivo `index.html`

Dentro del código HTML del sistema existe una constante llamada `SCRIPT_URL` que debe apuntar a la URL de la API que acabas de copiar. Abre el archivo `index.html` y busca una línea similar a:

```javascript
const SCRIPT_URL = 'TU_URL_AQUI';
```

Reemplaza `'TU_URL_AQUI'` por la URL de tu implementación de Apps Script y guarda los cambios (si ya has hecho el despliegue en GitHub Pages debes actualizar el archivo y volver a publicarlo).

## 4. Notas de seguridad y CORS

- El proyecto Apps Script solo debe ser accesible desde tu dominio de GitHub Pages. Puedes limitar el acceso configurando las reglas de CORS en el código (por ejemplo, comprobando el origen de las solicitudes y rechazando las no autorizadas).
- Es recomendable cambiar las credenciales predeterminadas (`gerente/admin123` y `locatario/local123`) tan pronto como sea posible. Estos valores se encuentran en el código del frontend y se pueden modificar dentro del archivo `index.html` para mayor seguridad.

Una vez finalizada la configuración, prueba todas las operaciones (consultas, creación de registros, actualización, etc.) desde la interfaz del sistema para asegurarte de que la integración con Google Sheets funciona correctamente.
