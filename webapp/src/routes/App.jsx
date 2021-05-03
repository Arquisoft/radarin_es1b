import { useState, useEffect } from 'react'
import { Header } from '../components/header'
import { About } from '../components/about'
import { Solid } from '../components/solid'
import { Team } from '../components/Team'
import JsonData from '../data/data.json'

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Header data={landingPageData.Header} />
      {/* <Solid data={landingPageData.Solid} /> */}
      {/* <About data={landingPageData.About} /> */}
      {/* <Team data={landingPageData.Team} /> */}
    </div>
  )
}

export default App
