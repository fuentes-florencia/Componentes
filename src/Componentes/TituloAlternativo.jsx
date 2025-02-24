import {  } from 'react'
import { Titulo } from './Titulo'

export const TituloAlternativo = ({condicion}) => {
    if (condicion){
        return <Titulo titulo={"Titulo Alterno"}/>
    }

return <>
<Titulo titulo={"Titulo Original"}/>
</>
}
