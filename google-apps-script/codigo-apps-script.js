/**
 * Apps Script API para el sistema gerencial Docks del Puerto Tigre.
 * Este archivo proporciona un esqueleto para peticiones HTTP GET y POST.
 * Reemplaza las funciones con la lógica real y la integración con Google Sheets.
 */

function doGet(e) {
  return ContentService.createTextOutput("Docks API en ejecución").setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  // Analiza el cuerpo JSON de la solicitud
  var data = JSON.parse(e.postData.contents);
  // TODO: Agregar lógica para manejar datos e interactuar con Google Sheets
  return ContentService.createTextOutput(JSON.stringify({ estado: 'exitoso', recibido: data }))
    .setMimeType(ContentService.MimeType.JSON);
}
