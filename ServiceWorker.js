'use strict'

const ELEMENTOS_A_CACHEAR = [ //=> Va el INDEX y TODOS LOS LINKS QUE ESTÉ USANDO DENTRO DEL MISMO (CDN's etc...)
    './', //Mi index HTML
    './style.css', //Mi CSS del HTML
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css', //Iconos de Bootstrap
    'https://unpkg.com/react@17/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js', //2 links del CDN de React
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', //Bootstrap CSS
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', //Bootstrap JS
    'https://unpkg.com/@babel/standalone/babel.min.js', //Babel CDN
    './components/Contador.jsx', //Mi Componente Contador
    './index.js', //Mi JS del HTML
    './favicon.ico' //FavIcon
];

const CACHE_NAME = 'v2_cache_contador_react'; //Nombre que le doy al archivo que contiene todo lo de arriba.

//EJ: EVENTO INSTALL DEL SERVICE WORKER
self.addEventListener('install', (evento)=>{
    evento.waitUntil(
        caches.open(CACHE_NAME)
            .then((nuevoObjetoCACHE) => {
                nuevoObjetoCACHE.addAll(ELEMENTOS_A_CACHEAR)
            })
            .then(() => {
                self.skipWaiting()
            })
            .catch((ErrorDelCACHE) => {
                alert(`Hubo un error en el CACHE!: ${ErrorDelCACHE}`);
            })
    ); //=> Fin del WaitUntil.
}); //=> Fin del AddEventListener.


//EJ: EVENTO ACTIVATE DEL SERVICE WORKER
self.addEventListener('activate', (evento)=>{
    const cacheWhiteList = [CACHE_NAME];

    evento.waitUntil(
        caches.keys()
            .then((NombresDeCaches) => {
                return Promise.all(NombresDeCaches.map((NombreCACHE) => {
                    cacheWhiteList.indexOf(NombreCACHE) === -1 && caches.delete(NombreCACHE);
                    //El && es cuando hay sola 1 acción para cumplir, sino usamos (? y :) juntos.
                }));
            })
            .then(() => {
                self.clients.claim();
            })
    ); //=> Fin del WaitUntil.
}); //=> Fin del AddEventListener.


//EJ: EVENTO FETCH DEL SERVICE WORKER
self.addEventListener('fetch', (evento)=>{
    evento.respondWith(
        caches.match(evento.request)
            .then((RESPUESTA) => {
                if(RESPUESTA){
                    return RESPUESTA;
                }else{
                    return fetch(evento.request);
                };
            })
    );
}); //=> Fin del AddEventListener.