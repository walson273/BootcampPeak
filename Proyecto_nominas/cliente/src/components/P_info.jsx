import * as React from 'react';
import TextField from '@mui/material/TextField';



export default function P_info(info){

return( 
<>

<div>
    <TextField className={`cajaTexto ${info.clase}`
}
     InputProps={{
        readOnly: true,
      }}                  
    id="outlined-read-only-input"
    label={info.label}
    defaultValue= {info.valor}
    />
</div>
</>

)


    



}