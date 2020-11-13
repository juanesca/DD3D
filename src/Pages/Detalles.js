import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import Detalles from '../Components/Detalles'

function pedidocotizador() {

    return (
        <div className="pedido">
            <Header />
            <Detalles />
            <Footer />
        </div>

    )
}

export default pedidocotizador;