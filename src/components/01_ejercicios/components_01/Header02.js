// componente de Header

import React from 'react';

//  se puede hacer destructing:
//  ({titulo})
function Header02({titulo}) {

    return(

        <div className="header_container">
            <h1>{ titulo }</h1>
        </div>
    );
}

export default Header02;