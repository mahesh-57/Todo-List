import './App.css'
import {useState} from 'react';
import Edit from './Edit'
const App =() =>{
  const [date,setDate] = useState();
  const [time,setTime] = useState();
  const [str,setStr] = useState("");
  const [arr,setArr] = useState([]);
  const changeHandler = (e)=>{
    setStr(e.target.value);
    console.log(e.target.value);
  }
  const taskHandler = () =>{
    const object = {
      id: arr.length===0? 1:arr[arr.length-1].id+1,
      taskName:str,
      item:false,
      date:date,
      time:time,
    }
    setArr([...arr,object]);
  }
  
  const completeHandler = (id) =>{
    setArr(arr.map((value)=>{
      return value.id === id? {...value,item:!value.item}:{...value};
    }))
  }
  const deleteHandler = (id)=>{   
    setArr(arr.filter((value)=>{
      return value.id!==id;
    }))
  }
  return (
    <div className="it" style={{display:"flex",justifyContent:"center",height:1400}}>
      <div className="main">
      <div className="firstDiv">
        <h1>TodoList</h1>
      </div>
      <div className="secondDiv">
        <input className="textInput" type="text" placeholder="Enter Task" onChange={changeHandler}/>
        <div>
          <input className="adjust" type="date" onChange={(e)=>{setDate(e.target.value);}}/>
          <input className="adjust" type="time" onChange={(e)=>{setTime(e.target.value);}}/>
        </div>
        <button className="additem" style={{backgroundColor:"green",color:"white",}} onClick={taskHandler}>addTask</button>
      </div>
      <div>
        {arr.map((value)=>{
          return (
              <div>
                <div className="add" style={{backgroundColor:value.item === true? "green":"brown",}}>
                <h1>{value.taskName}</h1>
                <div>
                    <button className="button" onClick={()=>completeHandler(value.id)}>complete</button>
                </div>
                <div>
                  {value.date}
                </div>
                <div>
                  {value.time} 
                </div>
                  <button className="button" onClick={()=>deleteHandler(value.id)}>delete</button>
                  <Edit id={value.id} arr={arr} setArr={setArr}/>
                </div>
              </div>
          )
        })}
      </div>
    </div>
    </div>
  );
}
export default App;


      
      