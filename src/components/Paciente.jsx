const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { mascota, propietario, email, fechaAlta, sintomas, id } = paciente

    const handleElimnar = () => {
        const confirm = window.confirm('¿Estas seguro de eliminar este paciente?')
        
        if(confirm){
            eliminarPaciente(id)
        }
    }
    
    return (
        <div className='__651_card'>
            <div className='__651_card-body'>
                <p className='uppercase font-bold mb-3'>Mascota:
                    <span className='font-normal normal-case text-slate-700'> {mascota}</span>
                </p>
                <p className='uppercase font-bold mb-3'>Propietario:
                    <span className='font-normal normal-case text-slate-700'> {propietario}</span>
                </p>
                <p className='uppercase font-bold mb-3'>Correo electronico:
                    <span className='font-normal normal-case text-slate-700'> {email}</span>
                </p>
                <p className='uppercase font-bold mb-3'>Fecha de alta:
                    <span className='font-normal normal-case text-slate-700'> {fechaAlta}</span>
                </p>
                <p className='uppercase font-bold mb-3'>Sintomas:
                    <span className='font-normal normal-case text-slate-700'> {sintomas}</span>
                </p>
            </div>
            <div className='flex justify-between px-5 mb-5'>
                <button onClick={()=>setPaciente(paciente)} className='bg-purple-700 px-10 py-2 rounded-md text-white font-semibold hover:bg-purple-800 transition-colors'>Editar</button>
                <button onClick={handleElimnar} className='bg-red-500 px-10 py-2 rounded-md text-white font-semibold hover:bg-red-600 transition-colors'>Borrar</button>
            </div>
        </div>
    )
}

export default Paciente