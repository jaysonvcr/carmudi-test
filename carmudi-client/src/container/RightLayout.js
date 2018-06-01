import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { postVehicles } from '../actions/postVehicleAction';
import { Input } from "antd";


class RightLayout extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    if(this.props.getVehiclesResponse !== null) {
      // console.log(this.props.getVehiclesResponse);
    }

    return (
      <div className="rightLayout">
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getVehiclesResponse: state.getVehiclesResponse,
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // getVehicles: getVehicles,
    }
  , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RightLayout);
