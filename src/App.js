import React, {  useEffect, useState } from "react";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState([])
  const [inputIp, setInputIp] = useState('8.8.8.8')
  

  function handleChangeLocation (ip) {
    setInputIp(ip)
  }

  console.log(location)
  const locationElements = location.map(location => {
    return(
      <Location 
        key={location.ip}
        ip={location.ip}
        location={location.location}
        isp={location.isp}
        handleChangeLocation={handleChangeLocation}
      />
    )
  })

  useEffect(() => {
    const apiDetail = async () => {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_ACCESS_KEY}&ipAddress=${inputIp}`)
      const data = await response.json()
      setLocation([data])
    }
    apiDetail()
  }, [inputIp])

  return (
    <div className="App">
      <div className="App__header">
        <div className="App__name">ip address tracker</div>
      </div>
      {locationElements}
    </div>
  );
}

export default App;
