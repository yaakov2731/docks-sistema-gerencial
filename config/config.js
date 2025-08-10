// Config de conexión
window.CONFIG = {
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwAFdsy2GdJ2dUnuYYMJUprdVaT3cefp5LyMYl_iRlbQCSO1krDbVV24AbWeiiw9CnRNg/exec",
  SHEET_ID: "1Syj1DXWyrm-9CdcNFGXLidLHF-MzuF0UfbCd-T2PhiE"
};

// Helper para construir URLs con action y sheetId
window.build = function(action, extraParams={}) {
  const base = (window.CONFIG.APPS_SCRIPT_URL||"").replace(/\/$/, "");
  const p = new URLSearchParams(Object.assign({ action, sheetId: window.CONFIG.SHEET_ID }, extraParams));
  return base + "?" + p.toString();
};
