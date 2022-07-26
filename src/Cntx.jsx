import React,{useContext} from 'react'
import { Fn } from './Pages/Home'
// import { Fn } from './App'

export default function Cntx() {
    const Fnn = useContext(Fn);
  return (
    <div>Cntx
<br />
aaa {Fnn}

    </div>
  )
}
