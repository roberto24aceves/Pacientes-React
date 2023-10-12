import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className='w-full md:w-6/12 2xl:w-8/12 px-4 h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='text-3xl font-black text-center mb-2'>Listado de pacientes</h2>
          <p className='text-lg text-center'>Administra tus <span className='font-semibold text-purple-600'>Pacientes y citas</span></p>
          {pacientes.map(paciente => {
            return <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
          })}
        </>
      ): 
      <>
        <h2 className='text-3xl font-black text-center mb-2'>No hay pacientes</h2>
        <p className='text-lg text-center'>Agrega pacientes y <span className='font-semibold text-purple-600'>apareceran aqui</span></p>
      </> }
    </div>
  )
}

export default ListadoPacientes