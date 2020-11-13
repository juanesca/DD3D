import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import Card1 from '../Components/Card1'
import Cargo from '../Components/Cargo'
import CEO2 from '../Components/CEO2'
import Aplicaciones from '../Components/Aplicaciones'

import { data } from '../utils/mocks/data';

function CEO() {

    return (
        <div className="CEO">
            <Header />
            <CEO2/>
            <Cargo />
            <Card1 datos = { data }/>
            <Aplicaciones/>
            <Footer />
        </div>

    )
}

export default CEO;
