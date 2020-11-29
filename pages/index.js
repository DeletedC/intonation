import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';



const Index = (props) => {
    const data = props.data;
    return (
        <Layout>
            <header className="center-align">
                <h1>Welcome to Intonation</h1>
                <h2>Student Tracking App</h2>
            </header>
            
        </Layout>
    );
};

export default Index;