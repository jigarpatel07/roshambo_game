import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const data = [
  {
    name: "Rock",
    icon: FaHandRock
  },
  {
    name: "Paper",
    icon: FaHandPaper
  },
  {
    name: "Sizzer",
    icon: FaHandScissors
  }]
function App() {
  const [selectValue, setSelectValue] = useState("")
  const [computerValue, setComputerValue] = useState("")
  const [winner, setWinner] = useState("")
  const [resultData, setResultData] = useState({
    user: 0,
    computer: 0
  })
  const handleChange = (item) => {
    if (winner === "") {
      setSelectValue(item)
      let rendom = Math.floor((Math.random() * 2) + 1)
      let compvalue = data[rendom].name
      setComputerValue(data[rendom].name)
      if (compvalue === item) { }
      else if (compvalue === "Rock" && item === "Paper") {
        setResultData({ ...resultData, user: resultData.user + 1 })
      }
      else if (compvalue === "Paper" && item === "Rock") {
        setResultData({ ...resultData, computer: resultData.computer + 1 })
      }
      else if (compvalue === "Rock" && item === "Sizzer") {
        setResultData({ ...resultData, computer: resultData.computer + 1 })
      }
      else if (compvalue === "Sizzer" && item === "Rock") {
        setResultData({ ...resultData, user: resultData.user + 1 })
      }
      else if (compvalue === "Paper" && item === "Sizzer") {
        setResultData({ ...resultData, user: resultData.user + 1 })
      }
      else if (compvalue === "Sizzer" && item === "Paper") {
        setResultData({ ...resultData, computer: resultData.computer + 1 })
      }
    }

  }
  useEffect(() => {
    if (resultData.user === 3) {
      setWinner("You")
    }
    if (resultData.computer === 3) {
      setWinner("Computer")
    }

  }, [resultData])
  return (
    <div className='wrapper'>
      <p className='title' >
        Welcome to Rock, paper and scissors game
      </p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {data.map((item, index) => {
          const IconI = item.icon
          return (
            <div key={index} onClick={() => handleChange(item.name)} className='buttonDiv'>
              <IconI />
              <p>{item.name}</p>
            </div>
          )
        })
        }
      </div>
      <div className='container'>
        <p>
          Your choice:<span>{selectValue}</span>
        </p>
        <p>
          Computer choice: <span>{computerValue}</span>
        </p>
      </div>
      <table>
        <th>
          <td>You</td>
          <td>Computer</td>
        </th>
        <tr>
          <td>{resultData.user}</td>
          <td>{resultData.computer}</td>
        </tr>

      </table>
      {winner && <p className='winnerText'> Winner is <span>{winner}</span></p>}
    </div>
  )
}

export default App
