import React, {useEffect, useState} from "react"

interface Props {
    
}

const Joke = (props: Props) => {
    const [joke, setJoke] = useState("test...")

    useEffect(() => {
      //constructor
      fetch("https://official-joke-api.appspot.com/random_joke").then(res => res.json()).then(res => {
        console.log(res)
        setJoke(`${res.setup} - ${res.punchline}`)
      }).catch(e => {
        console.log(e)
      })

      return () => {
        //destructor
      }
    }, [])

    return (
        <div>
          <h1>Joke!</h1>

          {joke}
        </div>
    )
}

export default Joke