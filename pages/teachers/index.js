import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout.js';



const Index = (props) => {
    const data = props.data;
    return (
        <Layout>
            <h1>Teacher Dashboard</h1>
            <button>Add Student</button>
            <h3>Students</h3>
            <ul>
                {data !== []?
                data.map((student, index) => {
                    return (
                        <li>{student.firstName} {student.lastName}</li>
                    );
                })
                : "Nothing to load."
                }
            </ul>
        </Layout>
    );
};

Index.getInitialProps = async () => {
    const res = await fetch('http://localhost:8000/students');
    const data = await res.json();
    return {
        data
    }
}

export default Index;