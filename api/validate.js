// Servidor de Validación de Licencias - Marenna Dev
// Ubicación en tu Vercel: /api/validate.js

// Tu lista de licencias en formato JSON (Modificas este archivo cada vez que crees una)
const LICENCIAS_JSON = {
  "LIC-LAUNCH-2026-PRO": {
    "active": true,
    "expiresAt": "2026-12-31T23:59:59.000Z", 
    "message": "Licencia de Lanzamiento Promocional Activa"
  },
  "LIC-TEST-9999-OK": {
    "active": true,
    "expiresAt": "2026-01-01T00:00:00.000Z",
    "message": "Licencia de pruebas válida"
  },
  "LIC-EXPIRADA-1234": {
    "active": true, 
    "expiresAt": "2026-01-01T00:00:00.000Z", 
    "message": "Esta licencia ya ha caducado"
  }
};

export default async function handler(req, res) {
  // Configuración de cabeceras CORS para permitir que la app local de tu cliente se conecte
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Responder rápido al preflight de CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Capturar la petición POST que envía el pagos.html del cliente
  if (req.method !== 'POST') {
    return res.status(405).json({ active: false, message: 'Método no permitido.' });
  }

  try {
    const { code, licenseKey } = req.body;
    const codigoIngresado = (code || licenseKey || "").trim().toUpperCase();

    if (!codigoIngresado) {
      return res.status(400).json({ active: false, message: 'Falta especificar el código de licencia.' });
    }

    // Buscar en nuestro JSON interno
    const licencia = LICENCIAS_JSON[codigoIngresado];

    if (!licencia) {
      return res.status(404).json({
        active: false,
        message: 'El código de licencia no existe o es incorrecto.'
      });
    }

    // Validar si está activa en el JSON
    if (!licencia.active) {
      return res.status(403).json({
        active: false,
        message: 'Esta licencia se encuentra suspendida.'
      });
    }

    // Validar fecha de expiración
    const ahora = new Date();
    const fechaExpiracion = new Date(licencia.expiresAt);

    if (fechaExpiracion < ahora) {
      return res.status(403).json({
        active: false,
        validUntil: licencia.expiresAt,
        message: 'La licencia ingresada ya ha expirado.'
      });
    }

    // Responder con éxito si todo coincide
    return res.status(200).json({
      active: true,
      validUntil: licencia.expiresAt, 
      message: licencia.message || 'Licencia validada con éxito.'
    });

  } catch (error) {
    return res.status(500).json({ 
      active: false, 
      message: 'Error en el servidor de licencias.' 
    });
  }
}
