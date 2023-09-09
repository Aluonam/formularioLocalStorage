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

    // Función para enviar el formulario con el boton enviar. Los datos deben pasarse en a JSON 
    const handleEnviarForm = () => {
        localStorage.setItem("formularioPau", JSON.stringify(formularioPau));
    }


    // Función: si se hace check, guarda el valor sino guarda "no tengo hambre"
    const handleTengoHambre = (e)=>{
        if(e.target.checked){
             setFormularioPau({...formularioPau,tieneHambre:e.target.value})
        } else{
             setFormularioPau({...formularioPau,tieneHambre:"No tengo hambre"})
        }
 
     }


  return (
    <div>
        {/* INPUT TIPO TEXTO (especifico type texto) */}
        {/* en el onChange donde se incluye dentro del set lo que hay ya en el formulario con el operador spread y además la clave y nuevo valor que se incluye */}
        {/* además, si quiero que desaparezca el valor una vez haya sido enviado: debo especificar el nombre de la variable donde lo he guardado y la clave (es la forma de acceder al objeto) */}
        Escribe tu nombre de usuario: 
        <input type="text" id='nombre_usuario' onChange={(e)=>setFormularioPau({...formularioPau,username:e.target.value})} value={formularioPau.username ?? ""}/>
        <br></br>

        {/* INPUT TIPO CONTRASEÑA (especifico type password) */}
        Escribe tu contraseña: 
        <input type="password" id="password" onChange={(e)=>setFormularioPau({...formularioPau,password:e.target.value})} />
        <br></br>

        {/* INPUT TIPO CHECKBOX */}
        {/* hay que especificar el tipo y también al guardar el valor: e.target.checked */}
        <input type="checkbox" id="identificador" name="nombre" onChange={(e)=>setFormularioPau({...formularioPau,tieneHambre:e.target.checked})}/>Tiene hambre
        <br></br>

        {/* INPUT TIPO CHECKBOX CON FUNCIÓN PARA GUARDAR UN VALOR U OTRO, si se hace check o no */}
        <input type="checkbox" id="identificador" name="nombre" value="Tengo hambre" onChange={(e)=>handleTengoHambre(e)}/>Tiene hambre
        <br></br>

        {/* SELECT CON OPCIONES */}
        {/* se guarda como value y la opcion preseleccionada se pone como selected */}
        <select onChange={(e)=>setFormularioPau({...formularioPau,equipo:e.target.value})}>
          <option>Atlético de Madrid</option>
          <option>Real Betis</option>
          <option>FC. Barcelona</option>
          <option selected="selected">Real Madrid</option> 
          <option>Zaragoza</option>
        </select>
        <br></br>

        {/* SELECT DE GRUPOS */}
        <select name="ciudad" onChange={(e)=>setFormularioPau({...formularioPau,ciudad:e.target.value})}>
          <optgroup label="Europa">
            <option>Madrid</option>
            <option>Londres</option>
            <option>Paris</option>
          </optgroup>
          <optgroup label="Suramerica">
            <option>Santiago</option>
            <option>Sao Paulo</option>
            <option>Lima</option>
            <option>Bogota</option>
          </optgroup>
            <optgroup label="Africa">
            <option>Casablanca</option>
            <option>Ciudad del Cabo</option>
          </optgroup>
        </select>

        <br></br>
        {/* BOTÓN BORRAR: deja el modificador como objeto vacio */}
        <button onClick={()=>setFormularioPau({})}>RESET</button>
        <br></br>
        {/* BOTÓN ENVIAR: función que especifica clave y valor. El valor se pasa a JSON JSON.stringify(formularioPau) con los datos de la variable del useState */}
        <button onClick={()=>handleEnviarForm()}>ENVIAR</button>
    </div>
  )
}

export default Formulario