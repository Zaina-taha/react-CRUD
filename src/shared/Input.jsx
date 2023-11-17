
import React from 'react'

export default function Input({type,value,title,name,id,handleData,customClass,errors}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className={`form-control ${customClass}`} id={id}  onChange={handleData}
       value={value}     />
     {errors[name]&&<p className='text-danger'>{errors[name]}</p>}
  </div>
  )
}
