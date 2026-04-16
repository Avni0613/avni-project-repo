import './App.css'
//import EventToDo from './EventToDo';
import Counter from './Counter'
import { useEffect } from 'react'
function App() {

  useEffect(() => { console.log("Welcome") }, [])
  //useEffect(()=>{console.log("Count updated")},[count])
  return (
    <div>

      {/* <Counter />
      <Search /> */}
      <h1>My App</h1>
      <Counter />

    </div>
  )
}

export default App;