import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { motion } from 'framer-motion'

import '../../styles/ScrollTop.scss'

const ScrollTransition = {
    hidden: { 
        opacity: 1,
        scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
          type: "spring",
          stiffness: 700,
          damping: 20
      }
    }
}
  
export default class ScrollTop extends Component {

    state = {
        visible: false
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scrollButtonVisibility)
    }

    scrollTop = () => 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    
    scrollButtonVisibility = () => 
        window.pageYOffset > 100
            ? this.setState({visible: true})
            : this.setState({visible: false})

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollButtonVisibility)
    }

    render() {
        return(
            <>
                {this.state.visible && <motion.div className="ScrollTop" variants={ScrollTransition} initial="hidden" animate="visible" exit="hidden">
                    <Fab
                        color="primary"
                        onClick={() => this.scrollTop()}
                    >
                        <ArrowUpwardIcon />
                    </Fab>
                </motion.div>
                }
            </>
        )
    }
}