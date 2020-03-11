import React, { Component } from "react";
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Partner from '../components/Partner';
import Service from '../components/Service';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Banner />
        <Service />
        <Feature />
        <Pricing />
        <Partner />
      </Layout>
    );
  }
};

export default Index;
