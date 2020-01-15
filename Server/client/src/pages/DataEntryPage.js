import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import EntryBody from '../components/EntryBody';

export default class EntryBody extends Component {
    constructor(props) {
      super(props);
      this.state = {
        systolic: "",
        diastolic: "",
        pulse: "",
        glucose: "",
        weight: "",
      };
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



export default DataEntry;
