import * as React from 'react';


export default function B_foto(info) {

    return (
        <>

            {<img className='BFoto' src={'../public/avatar_' + info.foto + '.png'} alt='logo' />}

        </>

    )



}