import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import arrow from '../assets/images/icon-arrow.svg'


function Location(props) {
    const [ip, setIp] = useState('')

    const handleChange = (e) =>{
        setIp(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleChangeLocation(ip)
    }

    // Creating map with leaflet.js
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

  return (
    <div className='location'>
        <form onSubmit={handleSubmit} className='location__form'>
            <input 
                type='text'
                name='ip'
                value={ip}
                onChange={handleChange}
                autoComplete='off'
            />

            <button type='submit'><img src={arrow} alt='' className='caretRight' /></button>
        </form>

        <div className='location__info'>
            <div className='location__info--details'>
                <h5>ip address</h5>
                <h3>{props.ip}</h3>
            </div>
            <div className='location__info--details'>
                <h5>location</h5>
                <h3>
                    {props.location.region},
                    {props.location.country}
                </h3>
            </div>
            <div className='location__info--details'>
                <h5>time zone</h5>
                <h3>{props.location.timezone}</h3>
            </div>
            <div className='location__info--details'>
                <h5>isp</h5>
                <h3>{props.isp}</h3>
            </div>
        </div>

        <MapContainer id='map' center={[props.location.lat, props.location.lng]} zoom={15 } scrollWheelZoom={true}>
            <TileLayer
                attribution={attribution}
                url={tileUrl}
            />
            <Marker position={[props.location.lat, props.location.lng]}></Marker>
        </MapContainer>
    </div>
  )
}

export default Location