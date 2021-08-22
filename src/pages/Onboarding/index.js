import React from 'react'
import { Link } from 'react-router-dom'

const Onboarding = () => {
    return (
        <>
            <div>
                <h1>ONBOARDING</h1>
                <Link to={'/Game'}>
                    <h1>Lets Start Spider Solitaire</h1>
                </Link>
            </div>
        </>
    )
}

export default Onboarding
