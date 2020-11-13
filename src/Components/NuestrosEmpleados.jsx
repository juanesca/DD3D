import React from 'react';
import '../css/estilos.css'

function NuestrosEmpleados(){

    return(
        
        <div className="text-center">
        <br/><br/>
        <h1 className="w">Nuestros Empleados</h1>
        <br/><br/>
        <table className="ta">
            <tr>
                <td className="tablita">Empleado</td>
                <td className="tablita">Edad</td>
                <td className="tablita">Telefono</td>
                <td className="tablita">Correo</td>
            </tr>
            <tr>
                <td className="tablita"> Carlos David  </td>
                <td className="tablita"> 40 </td>
                <td className="tablita"> 3424324 </td>
                <td className="tablita"> carlosdavid@kmsoft.com </td>
            </tr>
            <tr>
                <td className="tablita"> Andre Tobon </td>
                <td className="tablita"> 18</td>
                <td className="tablita"> 99999999</td>
                <td className="tablita"> o.tobon@kmsoft.com </td>
            </tr>
            <tr>
                <td className="tablita"> Julian Giraldo </td>
                <td className="tablita"> 28</td>
                <td className="tablita"> 3455</td>
                <td className="tablita"> g.giraldo@kmsoft.com</td>
            </tr>
            <tr>
                <td className="tablita"> Juliano Ortiz </td>
                <td className="tablita"> 35 </td>
                <td className="tablita"> 5656 </td>
                <td className="tablita"> juli_ortiz@kmsoft.com </td>
            </tr>
        
        
        </table>
        <br/><br/>
    </div>
    )

};

export default NuestrosEmpleados;