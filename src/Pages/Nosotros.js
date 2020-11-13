import React from "react";


import asi from "../Images/CEO.jpeg";

function Nosotros() {
  return (
    <div className="Nosotros">
      <img className="imgceo" src={asi} width="400"></img>
      <br></br>
      <div className="ceo">
        <h1>Quienes somos</h1>
        <p className="datos"> Diseño digital 3D</p>
        <p>
          Somos uno empresa Colombiana de Innovación y Diseño Digital ubicada en
          Medellín, Antioquía.
          <br />
          <br />
          Con más de 10 años acumulados de experiencia en el desarrollo de
          diseños digitales y otras herramientas de Tecnología, Entornos Web y
          Desarrollo Móvil.
          <br />
          <br />
        </p>
      </div>
      <div className="nuestra">
        <div className="contenido">
          <br />
          <br />
          <h2 className="datos"> Nuestro Equipo</h2>
          <p>
            Contamos con equipo experimentado comprometido con la calidad y
            certificado para la desarrollar productos de diseño gráficos de alta
            calidad.
          </p>
          <p>
            Somos un grupo de profesionales en las diferentes áreas del diseño
            gráfico, especialistas en comunicación visual. Interiorizamos en la
            filosofía de las marcas para contar por medio de diseños sus
            historias, nuestro equipo creativo está ubicado en la ciudad de
            Bogotá Colombia. Creamos los mejores diseños y potenciemos la
            comunicación de tu organización con herramientas visuales atractivas
            y de calidad.
          </p>

          <br />
          <br />
        </div>
        <br />
        <br />
        <h1 className="w">Nuestros Empleados</h1>
        <br />
        <br />
        <table className="ta">
          <tr>
            <td className="tablita">Empleado</td>
            <td className="tablita">Edad</td>
            <td className="tablita">Telefono</td>
            <td className="tablita">Correo</td>
          </tr>
          <tr>
            <td className="tablita"> Carlos David </td>
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
      </div>
    </div>
  );
}

export default Nosotros;
