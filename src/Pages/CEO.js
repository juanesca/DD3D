import React from "react";

import imgceo from '../Images/CEO.jpeg';

function CEO() {
  return (
    <div className="CEO">
      <img className="imgceo" src={imgceo} width="600"></img>
      <div className="ceo">
        <h1>Hola soy Carlos David Pérez</h1>
        <p className="datos">Y SOY DISEÑADOR GRAFICO</p>
        <p>
          ¡Hola! Si estás aquí, es porque quieres saber un poco más sobre mí,
          por eso, te voy a contar un poco quién soy, a qué me dedico, y cómo te
          puedo ayudar.
          <br />
          <br />
          Nací en Barcelona capital, aunque he vivido toda la vida fuera pero
          muy cerca de ella. Me gusta tener la ciudad cerca, pero prefiero los
          sitios más tranquilos para vivir.
          <br />
          <br />
          Como no sabía muy bien qué estudiar, cuando llegó la hora de decidir,
          me puse a estudiar informática, porque era lo que más me llamaba la
          atención en aquel momento.
          <br />
          <br />
          Eso me llevó a trabajar como informático algunos años, cosa que me
          hizo darme cuenta de que no me gustaba lo que hacía, ni me veía toda
          la vida intentando arreglar los marrones de los demás.
          <br />
          <br />
          Por ese motivo, desde que perdí mi último trabajo, no envié ningún
          curriculum más y decidí dedicarme a algo que realmente me gustara.
        </p>
      </div>
      <div className="textos">
        <br />
        <br />
        <h2 className="datos">¿ A qué me dedico ?</h2>
        <p>
          Actualmente, me dedico profesionalmente al diseño web con WordPress a
          tiempo completo. Es un trabajo que me encanta y que me permite
          disfrutar, por fin, de pasar horas y horas delante del ordenador, cosa
          que nunca antes me había sucedido.
        </p>
        <p>
          A lo largo de este tiempo, he podido trabajar con más de 30 clientes
          de alrededor del país y del mundo, y he creado y diseñado más de 60
          webs, gracias a lo cual he ido mejorando cada día más, perfeccionando
          la técnica y la creatividad a la hora de realizar nuevos proyectos.
        </p>
        <p>
          Realizo webs para particulares y empresas, sin importar su tamaño,
          aunque también colaboro directamente con agencias que necesitan
          externalizar el diseño web y deciden contar conmigo para crear las
          webs de sus clientes. Sea cual sea tu caso, no dudes en contactarme.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default CEO;
