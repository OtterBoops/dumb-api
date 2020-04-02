import React, { Component } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../../constants/PageTransition'
export default class AnimatedRoute extends Component {
    
    render() {
        return(
            <motion.div className="Content" variants={PageTransition} initial="out" animate="in" exit="out">
                {this.props.children}
            </motion.div>
        )
    }
}