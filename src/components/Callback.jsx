import React, { Component } from 'react';
import loading from '../svg/loading.svg';
import Redirect from '../hoc/redirect'


class Callback extends Component {
    componentDidMount(){
        this.props.auth.handleAuthentication();
    }

    render() {
        const style = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
        };
        console.log("before clall")
        return (
            <div style={style}>
                <img src={loading} alt="loading"/>
            </div>
        );
    }
}

export default Redirect(Callback);