import React from 'react'

export default function Actions({dispatch}) {
  function handleMarkAllCompleted(){
    dispatch({type:'HANDLE_MARK_ALL', status:"completed"})
  }
  function handleClearAll(){
    dispatch({type:'HANDLE_MARK_ALL', status:"active"})
  }
  return (
    <div className='flex-1 flex justify-center items-center flex-col'>
      <h1>Actions</h1>
      <button onClick={handleMarkAllCompleted} className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 ' >Mark All Completed</button>
      <button onClick={handleClearAll} className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 '>Clear Completed</button>
    </div>
  )
}
