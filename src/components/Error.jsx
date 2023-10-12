const Error = ({children}) => {
  return (
    <>
        <div className='bg-red-500 p-3 rounded-md mb-3'>
            {children}
        </div>
    </>
  )
}

export default Error