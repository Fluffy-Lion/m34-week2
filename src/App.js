import { useState, useEffect } from 'react'
const App = () => {
  const [advice, setAdvice] = useState("")
  const [error, setError] = useState({
    error: false,
    message: ""
  })
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
      setError({ error: true, message: error.message })
    }
  }

  useEffect(() => {
    collect()
    console.log("oop")
  }, [])

  if(error.error){
    return <h1>an error has occured: {error.message} </h1>
  }
  return (
    <div>
      <h1>advice: {advice.advice}</h1>
      <button onClick={collect}>fetch</button>
    </div>
  )
}
export default App