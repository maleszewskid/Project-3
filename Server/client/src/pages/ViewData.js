import React, { Component } from "react";
import API from "../utils/API";
import Header from '../components/Header/Header';
import ViewTabs from '../components/ViewTabs/ViewTabs';
import '../components/dataManipulater/index';
class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: '',
            loading: true,
            error: '',
        }
    }

    // When this component is mounted to the DOM we want to load in the user data and set the state with it:
    // Need username to make the call to the api, so how do we get the username?
   async componentDidMount() {
        this.setState({
            username: this.props.location.state
        });
        const { username } = this.props.location.state;
       API.allPatientData({ username })
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    data: '',
                    loading: false,
                    error: error.message
                });
            })
    };

    
    render = () => {
        return (
            <>
                <Header user={this.state.username} />
                {(this.state.loading || this.state.error) && <div>{this.state.loading ? 'Loading...' : this.state.error}</div>}
                {(!this.state.loading && !this.state.error) ? <ViewTabs data={this.state.data}/> : null }
            </>
        )   
    }

}



export default ViewData;
