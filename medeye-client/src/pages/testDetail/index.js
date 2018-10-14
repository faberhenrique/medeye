import React, { Component } from 'react';
import api from  '../../services/api';

// CSS
import './style.css';
export default class Test extends Component {
    state = {
        test: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/tests/${id}`);

        this.setState({ test: response.data });
    }
    render(){
        const { test } = this.state;

        return (
            <div className="test-info">
                <h1>{test.title}</h1>
                <p>{test.description}</p>
                <p>
                    URL: <a href={test.url}>{test.url}</a>
                </p>
            </div>
        )
    }
}