
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    setPacientes(pacientesLS)
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesFiltrados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesFiltrados)
  }

  return (
    <>
      <Header />
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap mt-8 -mx-4'>
          <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
          <ListadoPacientes pacientes={pacientes}  setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
        </div>
      </div>
    </>
  )
}

export default App
