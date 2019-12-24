import React, { Component } from "react";

import Content from '../components/containers/Content';

export default class Insert extends Component {
    constructor (props) {
        super(props);
        
        this.onChangeImageName = this.onChangeImageName.bind(this);
        this.onChangeRawLink = this.onChangeRawLink.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // added_by: '',
            // added_date: '',
            image_name: '',
            raw_link: '',
            // image_size: '',
            // image_resolution: '',
        }
    }

    onChangeImageName(e) {
        this.setState({
            image_name: e.target.value
        });
    }

    onChangeRawLink(e) {
        this.setState({
            raw_link: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({
            image_name: '',
            raw_link: '',
        })
    }



    render() {
        return(
            <Content>
                <p>Woah</p>
            </Content>
        )
    }
}