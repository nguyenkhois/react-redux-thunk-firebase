import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dbActions } from '../actions/firebase-action';

const mapDispatchToProps = {
    fetchData: dbActions.fetchData,
    addData: dbActions.addData
}

const mapStateToProps = (state) => {
    return ({
        database: state.database
    })
}

class FetchData extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    addData = () => {
        this.props.addData({ timestamp: Date.now() });
    }

    render() {
        console.log(this.props.database);
        return (
            <div>
                <p className="title">Demo for React - Redux - Redux-Thunk - Firebase</p>
                <p>Open console to view the result.</p>
                <button type="button" onClick={this.addData}>Add data</button>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);