import { useState, useEffect } from 'react'
const App = () => {
  const [cats, setCats] = useState("")
  const [error, setError] = useState({
    error: false,
    message: ""
  })
  const collect = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      if(response.status !== 200){
        throw new Error("oops")
      }
      const data = await response.json()
      setCats(data)
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
  if(!cats){
    return <h1>loading...</h1>
  }
  return (
    <div>
      <h1>cats</h1>
      {cats.map((cat, index) => {
        return <img key={index} src={cat.url} />
      })}
      <button onClick={collect}>fetch</button>
    </div>
  )
}
export default App