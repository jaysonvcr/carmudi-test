import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Form, Layout, Card } from "antd";
import { getVehicles } from '../actions/getVehiclesAction';


import Vehicle from '../component/Vehicle';


const { Header, Content, Footer } = Layout;


class LeftLayout extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getVehicles();
  }

  renderVehicles() {
    if(this.props.getVehiclesResponse !== null) {

      const vehicles = this.props.getVehiclesResponse;

      return Object.keys(vehicles).map(key => (
         <Vehicle key={key}
           id={vehicles[key].id}
           name={vehicles[key].name}
           location={vehicles[key].location}
           price={vehicles[key].price}
           engine_power={vehicles[key].engine_power}
           />
      ));

    }
  }


  render() {

    if(this.props.getVehiclesResponse !== null) {
      // console.log(this.props.getVehiclesResponse);
    }

    return (
      <div className="leftLayout">
        { this.renderVehicles() }
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
      getVehicles: getVehicles,
    }
  , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftLayout);
