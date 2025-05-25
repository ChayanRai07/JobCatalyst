import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-center items-center min-h-screen w-full overflow-hidden pt-30 pb-20 '>{children}</div>
  )
}

export default AuthLayout