import { useEffect, useState ,useReducer} from 'react'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Actions from './components/Actions'
import RemainingTodos from './components/RemainingTodos'
import FilterByStatus from './components/FilterByStatus'
import FilterByColor from './components/FilterByColor'
import { getDateFromBackend, setDataToBackend } from '../service/localStorage'
import taskReducer from './reducer'

function App() {
  const [tasks,dispatch] = useReducer(taskReducer,null)
  const [choices,setChoices] = useState([])
  const [filter,setFilter] = useState("all")
  useEffect(()=>{
    if(tasks !== null){
      setDataToBackend(tasks)
    }
  },[tasks])

  useEffect(()=>{
    getDateFromBackend().then(res=>{
      dispatch({type:"FILL", arr : res})
    })
  },[])
  return (
    <>
      <div className='bg-gray-200 pt-[100px] w-[100vw] h-[100vh] ' style={{margin:"0px"}}>
        <div className=' bg-white  w-[80vw] m-auto h-[80vh] rounded-md'>
          <h1 className='text-red-500 font-bold text-center text-[30px]'>Todos</h1>
            <Input dispatch={dispatch}/>
          <div className='h-[60%] overflow-scroll'>
            <Tasks tasks={tasks} dispatch={dispatch} filter={filter} choices={choices}/>
          </div>
          <div className=' h-[25%] flex gap-0 w-[100%]'>
            <Actions dispatch={dispatch}/>
            <RemainingTodos tasks={tasks}/>
            <FilterByStatus filter={filter} setFilter={setFilter}/>
            <FilterByColor choices={choices} setChoices={setChoices}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
