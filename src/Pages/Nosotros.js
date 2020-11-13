import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import QuienesSomos from '../Components/QuienesSomos'
import NuestraEmpresa from '../Components/NuestraEmpresa'
import NuestrosEmpleados from '../Components/NuestrosEmpleados'


function Nosotros() {

    return (
        <div className="Nosotros">
            <Header />
            <QuienesSomos />
            <NuestraEmpresa/>
            <NuestrosEmpleados/>
            <Footer />

        </div>

    )
}

export default Nosotros;