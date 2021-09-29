import React, { useState, useEffect } from 'react'
import './style.css'

export default function FirstFinal() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("City")

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dd4e69c17ce82ddc0fd09a440fbefc02`
            const response = await fetch(url)
            //console.log(response)
            const responseJson = await response.json()
            // console.log(responseJson)
            setCity(responseJson.main)
        }
        fetchAPI()
    }, [search])

    return (
       
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={(event) => {
                        setSearch(event.target.value)
                    }} placeholder="Type your City/Country/State"/>
                </div>
               {!city?(
                   <p className="realStatement">Data not Found<br/>Sorry!</p>
               ) : (
                   <div>
                <div className="info">
                <h1 className="location"><i className="fa fa-street-view" aria-hidden="true"></i>
                    {search}</h1>
                <h2 className="temp">{city.temp}° Celsius</h2>
                <h3 className="tempmin_max">
                    Min:{city.temp_min}° Celsius<br />
                    Max:{city.temp_max}° Celsius
                </h3>
                <h3 className="tempmin_max">
                    <span>Feels like:{city.feels_like}° Celsius<br/> Pressure:{city.pressure}</span>
                </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>

        </div>
               )}
               
</div>

       
    )
}
