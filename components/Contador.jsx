const Contador = () => {

    const [counter, setCounter] = React.useState(0); //=> Estoy iniciando el valor de 'counter' en 0.
    
    const aumentar = () => { setCounter( counter + 1 ) };
    const dismiuir = () => { setCounter( counter - 1 ) };


    return (
    <div className="text-center mt-3">
        <h1 className={counter<0 ? 'red' : 'green'}>Contador: {counter}</h1>
        <button type="button" onClick={ dismiuir }id="down" className="btn btn-danger m-2">Disminuir</button>
        <button type="button" onClick={ aumentar } id="up" className="btn btn-success m-2">Aumentar</button>
    </div>
    )   
};