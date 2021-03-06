import React from 'react'

import Header from './Header'
import Footer from './Footer'

function layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default layout;
