'use strict'

const Parrafo = () => {

return(
<div class="bg-dark text-light p-3">
    <h1>Hola, éste es mi titulo con JSX</h1>
    <h1>Contador:</h1>
    <p>Éste es mi parrafo con JSX jeje que facil que es ahora.</p>
    <p>El año actual es: {new Date().getFullYear()}</p>

    <ul>
        <li><a href="#" target="_blank">Hola 1</a></li>
        <li><a href="#" target="_blank">Hola 2</a></li>
        <li><a href="#" target="_blank">Hola 3</a></li>
        <li><a href="#" target="_blank">Hola 4</a></li>
    </ul>
</div>
)
};

ReactDOM.render(<Contador />, document.getElementById('root'));