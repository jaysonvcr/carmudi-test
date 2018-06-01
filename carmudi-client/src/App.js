import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Col, Row } from 'antd';

import { getVehicles } from './actions/getVehiclesAction';
import { postVehicle } from './actions/postVehicleAction';

import LeftLayout from './container/LeftLayout';
import RightLayout from './container/RightLayout';

import { Row, Col, Form, Layout, Card } from "antd";

import logo from './logo.svg';


const { Header, Content, Footer } = Layout;



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      vehicles: '',
    };

  }

  componentDidMount() {
    // this.props.getVehicles();
    this.props.postVehicle(['asdf': true]).then(function(response){
      // console.log(response.payload);
      // {success: true}
    });
  }

  componentWillReceiveProps(nextProps) {
    // console.log('A:' + nextProps)
  }


  render() {

    if(this.props.getVehiclesResponse !== null) {
      // console.log(this.props.getVehiclesResponse);
    }

    return (
      <div className="App">
        <Layout>
          <Header>
              <img src="../images/logo.png" className="logo" alt=""/>
          </Header>
          <Content>
            <Row>
              <Col span={15}>
                <LeftLayout/>
              </Col>
              <Col span={9}>
                <RightLayout/>
              </Col>
            </Row>
          </Content>
          <Footer className="text-center">
            Philus Technology Inc. ©2018
          </Footer>
        </Layout>
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
      postVehicle: postVehicle
    }
  , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
