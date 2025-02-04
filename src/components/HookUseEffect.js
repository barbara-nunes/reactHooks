import { useEffect,  useState } from "react"

const HookUseEffect = () => {
    //sem dependencias
    useEffect(() => {
        console.log("Estou sendo executado!");
    });

    const [number, setNumber] =  useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    //array de dependencias vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez!");
    }, []);

    //item no array de dependencias
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda!");
        }

    }, [anotherNumber]);

    //cleanup do useEffect
    useEffect(() => {
        /* const timer = setTimeout(() => {
            console.log("Hello World!");
            setAnotherNumber(anotherNumber + 1);
        }, 2000);

        //para parar de chamar na outra pagina
        return () => clearTimeout(timer); */
    }, [anotherNumber]);

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}> Mudar anotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect