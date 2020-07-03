import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';



const Index = (props) => {
    return (
        <Layout>
            <h1>Hello! I'm the Index page.</h1>
        </Layout>
    );
};

// Index.getInitialProps = async () => {
//     //Insert fetch code from Django API
// }

export default Index;