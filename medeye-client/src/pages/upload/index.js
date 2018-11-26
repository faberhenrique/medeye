import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import api from  '../../services/api';
// CSS
import './styles.css';

const axios = require("axios");

class ReactUploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            file: null,
            test: {},
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }
    async componentDidMount(){
        console.log(this.props);
        const { id } = this.props.match.params;
        const response = await api.get(`/tests/${id}`);

        this.setState({ test: response.data });
    }
    onFormSubmit(e){
        const { test } = this.state;
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('img',this.state.file);
        formData.append('test',test.title);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:3001/api/upload",formData,config)
            .then((response) => {
                alert("Arquivo enviado com sucesso");
            }).catch((error) => {
                alert("Arquivo não pôde ser enviado, verifique o tamaho! Máx: 1 MB");
            });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        const { test } = this.state;
        return (

            <div className="test-info">
                <form onSubmit={this.onFormSubmit}>
                    <h1>{test.title}</h1>
                    <p>{test.description}</p>
                    <div className="send-img">
                        <input type="file" name="img" id="img" onChange= {this.onChange} />
                        <label htmlFor="img" className="input-img">
                            <FontAwesomeIcon icon={faUpload} />
                            <span>     
                                Selecione a imagem&hellip;
                            </span>
                        </label>
                        <button className="submit-image" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ReactUploadImage