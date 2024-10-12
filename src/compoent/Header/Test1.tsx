import { useState } from "react"


const Test1 = () => {
    const [input,setInput] = useState("");
    const [iteam,setIteam] = useState([""]);
    const sub = () =>{
        setIteam([...iteam,input]);
        console.log(iteam);  
    };
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <input type="button" value={"submit"} onClick={sub}/>
    </div>
  )
}

export default Test1
