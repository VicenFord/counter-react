'use strict'

if (navigator.serviceWorker) { //=> VALIDACIÓN: Si existe serviceWorker en el NAVIGATOR, haz X cosa:
    navigator.serviceWorker.register('./ServiceWorker.js');
}