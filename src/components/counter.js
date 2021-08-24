import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

const Counter = ({counter, inc, dec, rnd}) => {
    return(
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button type="button" className="btn btn-primary mr-1" onClick={inc}>inc</button>
            <button type="button" className="btn btn-primary mr-1" onClick={dec}>dec</button>
            <button type="button" className="btn btn-primary" onClick={rnd}>rnd</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state  
    };
};

const mapDispatchToProps = (dispatch) => {    
    return bindActionCreators(actions, dispatch); //inc, dec, rnd
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
