import React, { Component } from 'react';
import Header from '../components/Header/Header';


class SubmitToDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            placeholder: ''
        }
    }

    componentDidMount() {
        this.setState({
            username: this.props.location.state
        });
        const { username } = this.props.location.state;
        console.log(username);
    }

    render = () => {
        console.log(this.props);
        const { username } = this.state;
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
