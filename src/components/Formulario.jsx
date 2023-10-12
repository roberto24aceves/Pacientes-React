import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length>0){
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)
    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar formulario

    if([mascota, propietario, email, fechaAlta, sintomas].includes('')){
      setError(true)
    }else{
      setError(false)
      // Crear objeto
      const objPaciente = {
        mascota,
        propietario,
        email,
        fechaAlta,
        sintomas
      }

      if(paciente.id){
        // Editar paciente
        objPaciente.id = paciente.id

        const pacientesEditados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
        setPacientes(pacientesEditados)
        setPaciente({})

      }else{
        //Nuevo paciente
        objPaciente.id = generarId()
        setPacientes([...pacientes, objPaciente])
      }

      // Resetear formulario
      setMascota('')
      setPropietario('')
      setEmail('')
      setFechaAlta('')
      setSintomas('')
    }

  }

  return (
    <div className='w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 px-4'>
      <h2 className='text-3xl font-black text-center mb-2'>Seguimiento Pacientes</h2>
      <p className='text-lg text-center'>Agrega Pacientes y <span className='font-semibold text-purple-600'>Administralos</span></p>

      <div className='__651_card'>
        <div className='__651_card-body'>
          <form onSubmit={handleSubmit}>
            { error && <Error><p className='text-lg font-semibold text-white text-center'>Todos los campos son obligatorios</p></Error> }  
            <div className='__651_form-group'>
              <label htmlFor='mascota'
                className='__651_label'>Nombre Mascota</label>
              <input id='mascota'
                placeholder='Nombre de la mascota'
                type='text'
                className='__651_input __placeholder __hover __focus' 
                value={mascota}
                onChange={(e)=> setMascota(e.target.value)}/>
            </div>
            <div className='__651_form-group'>
              <label htmlFor='propietario'
                className='__651_label'>Nombre del propietario(a)</label>
              <input id='propietario'
                placeholder='Nombre del propietario(a)'
                type='text'
                className='__651_input __placeholder __hover __focus' 
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)}/>
            </div>
            <div className='__651_form-group'>
              <label htmlFor='email'
                className='__651_label'>Correo electronico</label>
              <input id='email'
                placeholder='Correo electronico'
                type='email'
                className='__651_input __placeholder __hover __focus' 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='__651_form-group'>
              <label htmlFor='fechaAlta'
                className='__651_label'>Fecha de alta</label>
              <input id='fechaAlta'
                placeholder='Fecha de alta'
                type='date'
                className='__651_input __placeholder __hover __focus' 
                value={fechaAlta}
                onChange={(e)=> setFechaAlta(e.target.value)}/>
            </div>
            <div className='__651_form-group'>
              <label htmlFor='sintomas'
                className='__651_label'>Sintomas</label>
              <textarea id='sintomas'
                placeholder='Sintomas que presenta la mascota'
                rows='6'
                className='resize-none __651_input __placeholder __hover __focus' 
                value={sintomas}
                onChange={(e)=> setSintomas(e.target.value)}/>
            </div>
            <div className='__651_form-group'>
              <input type='submit'
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                className='__651_btn' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formulario