import React  from 'react'
import FilterInput from './FilterInput'
let colors = ["blue","green","orange","purple","red"]
export default function FilterByColor({setChoices,choices}) {
      function handleChange(e){
          let name = e.target.name
          if(!colors.includes(name)){return }
          return  !choices.includes(name) ? 
          setChoices(prev=>[...prev,name]) :
          setChoices(choices.filter((data)=>data!==name))
      }
  return (
    <div className='flex-1 justify-center flex items-center flex-col gap-2'>
      <h1>Filter By Color</h1>
      {
        colors.map((data)=><FilterInput choices={choices} isChecked = {choices.includes(data)} onChange={handleChange} color={data}/>)
      }
    </div>
  )
}
