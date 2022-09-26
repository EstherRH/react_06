import React from 'react';

// function vs. const



// function Header03({titulo}) {
//
//     return(
//
//         <div className="header_container">
//             <h1>{ titulo }</h1>
//         </div>
//     );
// }
//
// export default Header03;




// Function expression:
// en const se podría quitar el return
// se estrae el prop de título
const Header03 = ({titulo}) => {

    return(
        <div className="header_container">
            <h1>{ titulo }</h1>
        </div>
    );

}

export default Header03;