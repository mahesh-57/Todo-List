import {useEffect} from 'react'
const Text = () =>{
    const inputHandler = (e) =>{
        console.log(e.target.value);
    }
    fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
    setStr(data.fact);
  })
    return (
        <input type="text" onChange={inputHandler}/>
    );
}
export default  Text;