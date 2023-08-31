// import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import AboutUs from './AboutUs'

function Home(){

    let navigate = useNavigate()
    return(
        <>
        <div className="Home">
            <div className="home-header">
                <h1>Your own community for business, technology, social and concerts events</h1>
                <h2>Life is an event. Get started in minutes and experience the best now.</h2>

                <div className="link-btn">
                    <button onClick={() => {navigate ('/Service')}} type="button">Learn More</button>
                </div>
            </div>
        </div>
        <AboutUs />
        </>
    )
}

export default Home;