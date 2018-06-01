import React, { Component } from 'react';

import { Form, Layout, Card } from "antd";

const { Header, Content, Footer } = Layout;


class Vehicle extends Component {

  constructor(props) {
    super(props);



  }

  render() {

    return (
      <Card key={this.props.id} title={this.props.name}>
        { this.props.location } <br/>
        { this.props.engine_power } <br/>
        { this.props.price } <br/>
        { this.props.engine_displacement } <br/>
      </Card>
    );
  }
}

export default Vehicle;
