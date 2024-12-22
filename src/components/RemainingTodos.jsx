import React from 'react'

export default function RemainingTodos({tasks}) {
  return (
    <div className='flex-1 flex justify-center items-center flex-col gap-2'>
      <h1>Remaining Todos</h1>
      <span>{tasks && tasks.reduce((acc,data)=>acc + (data.status=="active"?1:0),0)}</span>
    </div>
  )
}
