import React, { useEffect, useState } from 'react'

const Formulario = () => {

    // useEffect para guardar los datos en local con .getItem
    useEffect(() => {
        const datosLocal = localStorage.getItem("formularioPau")
        // console.log(datosLocal)
        console.log(JSON.parse(datosLocal))
        // Tengo que modificarlo para que no lo reciba en formato JSON 
    }, [])
    
    // Crear useState para guardar los datos del formulario. Además debe ser un objeto vacio de forma predeterminada.
    const [formularioPau, setFormularioPau] = useState({})

    // Función para enviar el formulario con el boton enviar
    const handleEnviarForm = () => {
        localStorage.setItem("formularioPau", JSON.stringify(formularioPau));
    }


  return (
    <div>
        {/* input especifico tipo (texto) */}
        {/* en el onChange donde se incluye dentro del set lo que hay ya en el formulario con el operador spread y además la clave y nuevo valor que se incluye */}
        {/* además, si quiero que desaparezca el valor una vez haya sido enviado: debo especificar el nombre de la variable donde lo he guardado y la clave (es la forma de acceder al objeto) */}
        <input type="text" id='nombre_usuario' onChange={(e)=>setFormularioPau({...formularioPau,username:e.target.value})} value={formularioPau.username ?? ""}/>
        <br></br>
        <button onClick={()=>setFormularioPau({})}>RESET</button>
        <button onClick={()=>handleEnviarForm()}>ENVIAR</button>
    </div>
  )
}

export default Formulario