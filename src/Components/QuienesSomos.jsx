import React from 'react';
import asi from '../Images/.jpg';
import '../css/estilos.css'


function QuienesSomos() {
    return (
        
        <div className="contenido">
         <img className="imgceo" src={asi} width="400"></img>
         <br></br>
         <div className="ceo">
            
            <h1>Quienes somos</h1>
            <p className="datos"> Diseño digital 3D</p>
            <p>
               Somos uno empresa Colombiana de Innovación y Diseño Digital ubicada en Medellín, Antioquía. 
                <br/><br/>
                Con más de 10 años acumulados de experiencia en el desarrollo de diseños digitales y otras
                herramientas de Tecnología, Entornos Web y Desarrollo Móvil.
                <br/><br/>
            </p>
        </div>
    </div>


);
}
    
    export default QuienesSomos;