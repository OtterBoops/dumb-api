import React, { Component } from 'react'
import { motion } from 'framer-motion'

import '../../styles/Content.scss'

const PageTransition = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: '-5%'
    }
}

export default class AnimatedRoute extends Component {
    render() {
        return(
            <motion.div className="Content" variants={PageTransition} initial="out" animate="in" exit="out">
                {this.props.children}
            </motion.div>
        )
    }
}