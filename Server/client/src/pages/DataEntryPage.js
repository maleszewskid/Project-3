import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import EntryBody from '../components/EntryBody';

class DataEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: ''
        }
    }


    render = () => {
        const username = this.props.location.state;
                    <div>
                        <Link
                            to="/DataEntry"
                            className={window.location.pathname === '/DataEntry'}
                        >
                        </Link>
                        <EntryBody user={username}/>
                        
                    </div>
                
        }
    }
}


export default DataEntry;
