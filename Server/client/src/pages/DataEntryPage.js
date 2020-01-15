import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }


    render = () => {
        const username = this.props.location.state;
        return (
        <div>
            <Link
                to="/DataEntry"
                className={window.location.pathname === '/DataEntry'}
            >
            </Link>
            <EntryBody onChange={this.handleChange} user={username} />

        </div>
        )
    }



export default DataEntry;
