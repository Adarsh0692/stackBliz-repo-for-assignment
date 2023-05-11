import React,{useEffect,useState} from "react";


export default function App() {
  const [time, setTime] = useState(60)

useEffect(() => {
  const timer = time >0 && setInterval(()=>{
    setTime((pre) => pre - 1 )
   
  },1000)
  return () => clearInterval(timer)
} )
  return (
    <div>
      <h1>Counter Timer</h1>
    {time} sec
    </div>
  );
}
