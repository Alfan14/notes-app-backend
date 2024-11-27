const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
 
response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
 
return response;