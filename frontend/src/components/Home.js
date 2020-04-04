import React, { Component } from 'react'
import AnimatedRoute from './animated/AnimatedRoute'
export default class Home extends Component{
    
    render() {
        return(
            <AnimatedRoute>
                <div className="Home">
                    <p>Home</p>
                </div>
            </AnimatedRoute>
        )
    }
}