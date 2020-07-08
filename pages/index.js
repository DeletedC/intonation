import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';



const Index = (props) => {
    const data = props.data;
    return (
        <Layout>
            <h1>Hello! I'm the Index page.</h1>
        </Layout>
    );
};

export default Index;