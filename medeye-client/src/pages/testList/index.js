import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

// CSS
import './styles.css';


export default class Tests extends Component{
    state = {
        tests: [],
        testInfo: [],
        page: 1,
    }

    componentDidMount() {
        this.loadTests();
    }

    loadTests = async (page = 1) => {
        const response = await api.get(`/tests?page=${page}`);

        const { docs , ...testInfo } = response.data;

        this.setState({tests: docs, testInfo, page})
    };

    prevPage = () => {
        const { page } = this.state;

        if( page === 1) return;

        const pageNumber = page - 1;

        this.loadTests(pageNumber);
    }
    nextPage = () => {
        const { page, testInfo } = this.state;

        if( page === testInfo.pages) return;

        const pageNumber = page + 1;

        this.loadTests(pageNumber);
    }

    render() {
        const { tests, page, testInfo} = this.state;

        return (
            <div className="test-list">
                { tests.map(test => (
                    <article key={test._id}>
                        <strong>{test.title}</strong>
                        <p>{test.description}</p>
                        <Link to={`/tests/${test._id}`}> Acessar </Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === testInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
};