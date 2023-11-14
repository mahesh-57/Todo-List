import React from 'react';
import {useState} from 'react';

const Edit = (props) =>{
    const [change,setChange] = useState("");
    const changeHandler = (e) =>{
        setChange(e.target.value);
    }
    const editHandler = () =>{
        const ar = props.arr; 
        props.setArr(ar.map((value)=>{
           return value.id === props.id? {...value,taskName:change}:{...value};
        }));
        
    }
    return (
        <div>
            <input style={{height:30}} type="text" placeholder="edit" onChange={changeHandler}/>
            <button style={{paddingTop:8,paddingBottom:8,paddingLeft:3,paddingRight:3}} onClick={editHandler}>save</button>
        </div>
    );
}
export default Edit;