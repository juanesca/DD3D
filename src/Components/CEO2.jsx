import React from 'react';
import imgceo from '../images/CEO.jpeg';
import '../css/estilos.css'

function Header() {
    return (

        <div className="contenido">
            <img className="imgceo" src={imgceo} width="600"></img>
            <div className="ceo">
                <h1>Hola soy Carlos David Pérez</h1>
                <p className="datos">Y SOY DISEÑADOR GRAFICO</p>
                <p>
                    ¡Hola! Si estás aquí, es porque quieres saber un poco más sobre mí, por eso, te voy a contar un poco quién soy, a qué me dedico, y cómo te puedo ayudar. 
                    <br/>
                    <br/>
                    Nací en Barcelona capital, aunque he vivido toda la vida fuera pero muy cerca de ella. Me gusta tener la ciudad cerca, pero prefiero los sitios más tranquilos para vivir.
                    <br/>
                    <br/>
                    Como no sabía muy bien qué estudiar, cuando llegó la hora de decidir, me puse a estudiar informática, porque era lo que más me llamaba la atención en aquel momento.
                    <br/>
                    <br/>
                    Eso me llevó a trabajar como informático algunos años, cosa que me hizo darme cuenta de que no me gustaba lo que hacía, ni me veía toda la vida intentando arreglar los marrones de los demás.
                    <br/>
                    <br/>
                    Por ese motivo, desde que perdí mi último trabajo, no envié ningún curriculum más y decidí dedicarme a algo que realmente me gustara.
                </p>
            </div>
        </div>

    );
}

export default Header;