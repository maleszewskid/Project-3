import React, { Component } from 'react';


class SubmitToDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: ''
        }
    }


    render = () => {
        console.log(this.props);
                return (
                    <div>
                        This is submit to Doctor Page
                        
                    </div>
                )
        }
    }


export default SubmitToDoctor;
