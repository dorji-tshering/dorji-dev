import React from 'react'

const Notice = ({ message } : {message: string}) => {
  return (
    <div className="">
        <p className="bg-red-400">{message}</p>
    </div>
  )
}

export default Notice