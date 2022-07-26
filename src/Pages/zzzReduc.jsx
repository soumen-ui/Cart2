import React,{useReducer} from 'react'

export default function Reduc() {
    const initialState = 0;

const reducer = (state, type ) => {
  switch (type) {

  case "add":
    return (state + 1);
  case "minus":
    return (state - 1);

  default:
    return state
  }
}
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>Reduc
        <h1> 

{state}
        </h1>
<br />
<button onClick={()=>{dispatch("add")}}> Add </button><br />
<button onClick={()=>{dispatch("minus")}}> minus </button><br />

    </div>
  )
}


