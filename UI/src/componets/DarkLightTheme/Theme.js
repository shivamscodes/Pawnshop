import { useState,useEffect } from "react"

function Theme(){

  const [dark,setDark] = useState(false)

  useEffect(()=>{

    const savedTheme = localStorage.getItem("theme")

    if(savedTheme === "dark"){
      document.body.classList.add("dark")
      setDark(true)
    }

  },[])

  const toggleTheme = ()=>{

    if(dark){
      document.body.classList.remove("dark")
      localStorage.setItem("theme","light")
    }else{
      document.body.classList.add("dark")
      localStorage.setItem("theme","dark")
    }

    setDark(!dark)
  }

  return(
    <div>

      <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      >
      {dark ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* your routes */}
      
    </div>
  )
}

export default Theme