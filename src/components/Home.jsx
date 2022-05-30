import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="./assets/bg.jpg" height='550px' class="card-img" alt=""/>
                    <div class="card-img-overlay d-flex flex-column justify-content-center mx-5">
                        <h5 class="card-title display-3 fw-bolder mb-0">New Arrivals</h5>
                        <p class="card-text lead fs-2">Check Out All The Trends</p>
                        
                    </div>
            </div>
            <Products/>
        </div>
    )
}
