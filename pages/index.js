import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';



const Index = (props) => {
    const data = props.data;
    return (
        <Layout>
            <h1>Hello! I'm the Index page.</h1>
            <ul>
                {data?
                (data.map((teacher, index) => {
                    return (
                        <li>{teacher.firstName} {teacher.lastName}</li>
                    );
                }))
                : "Nothing to load."
                }
            </ul>
        </Layout>
    );
};

Index.getInitialProps = async () => {
    const res = await fetch('http://localhost:8000/teachers');
    const data = await res.json();
    return {
        data
    }
}

export default Index;