import { useState } from 'react'
const App = () => {
  const [advice, setAdvice] = useState("")

  const collect = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice")
      console.log(response) 
      if(response.status !== 200){
        throw new Error("oops")
      }
      const data = await response.json()
      setAdvice(data.slip)
    } catch (error) {
      console.log("error: ", error)
    }

  }
  return (
    <div>
      <h1>advice: {advice.advice}</h1>
      <button onClick={collect}>fetch</button>
    </div>
  )
}
export default App