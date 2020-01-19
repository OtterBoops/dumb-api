import React from "react";
import axios from "axios";

import config from '../config/config.js'
import Image from './elements/Image';
import Content from '../components/containers/Content';

const BE_URL = config.BE_ADDRESS + ":" + config.BE_PORT + "/images"

export default class List extends Content {

    constructor(props) {
        super(props);

        this.state = {images: []};
    }
    

    componentDidMount() {
        axios.get(BE_URL + '/list/')
            .then(response => 
                this.setState({ images: response.data })
            )
            .catch(err => 
                console.log(err)
            )
    }

    render() {
        return(
            <Content>
                {this.state.images.map((image, i) => 
                    <Image className="Image" image={image} key={i} />
                )}
            </Content>
        )
    }
}