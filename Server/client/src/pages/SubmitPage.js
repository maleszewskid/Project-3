import React, { Component } from 'react';
import Header from '../components/Header/Header';


class SubmitToDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: ''
        }
    }


    render = () => {
        console.log(this.props);
        const username = this.props.location.state;
                return (
                <>
                    <Header user={username} />
                    <div>
                        This is submit to Doctor Page
                        
                    </div>
                </>
                )
        }
    }


export default SubmitToDoctor;
