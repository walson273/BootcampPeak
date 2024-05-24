import * as React from 'react';
import TextField from '@mui/material/TextField';



export default function P_info(info){

return( 
<>


    <TextField className={`cajaTexto ${info.clase}`
    }
     InputProps={{
        readOnly: true,
      }}                  
    id="outlined-read-only-input"
    label={info.label}
    
    defaultValue= {info.valor}
    inputProps={{style: {fontSize: 32}}} // font size of input text
  InputLabelProps={{style: {fontSize: 26}}} // font size of input label
    />

</>

)


    



}