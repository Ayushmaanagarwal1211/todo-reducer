import React from 'react'

export default function FilterInput({color,onChange,isChecked}) {
  return (
    <div key={color} className="flex w-[200px] m-auto gap-2 items-center justify-between">
        <input checked={isChecked} onChange={onChange} name={color} type="checkbox" id={color}></input>
        <div className={`bg-${color}-700 h-[15px] w-[50px] rounded-md `}></div>
        <label htmlFor={color} className='w-[40px]'>{color}</label>
      </div>
  )
}
