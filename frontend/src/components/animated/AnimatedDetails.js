import React, { Component } from 'react'
import { motion } from 'framer-motion'

import '../../styles/Popup.scss'

const PopupTransition = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: '-5%'
    }
}

export default class AnimatedDetails extends Component {
    render() {
        return(
            <motion.div className="Details" variants={PopupTransition} initial="out" animate="in" exit="out">
                {this.props.children}
            </motion.div>
        )
    }
}