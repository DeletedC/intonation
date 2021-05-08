import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout.js';
import Form from '../../components/Form.js';


const Index = (props) => {
    const data = props.data;

    const nullStudent = {
        userName: "",
        firstName: "",
        lastName: "",
        age: 1,
        bio: "",
        level: "",
        teacher: ""
    }

    let editStudent = {
        userName: "",
        firstName: "",
        lastName: "",
        age: null,
        bio: "",
        level: "",
        teacher: ""
    }
 
    
    const handleCreate = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/students', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (userName) => {
        try {
            const response = await fetch(`http://localhost:8000/students/${userName}`, {
                method: "DELETE"
              });
        } catch (error) {
            console.log(error);
        }
      };
    
    return (
        <Layout>
            <h1>Teacher Dashboard</h1>
            <button>Add Student</button>
            <h3>Students</h3>
            <Form initial={nullStudent} handleSubmit={handleCreate}/>
            <ul className="left">
                {data !== 'noDatabase'?
                data.map((student, index) => {
                    return (
                        <li>Name: {student.firstName} {student.lastName} <br/>
                            Age: {student.age} <br/>
                            Level: {student.level} <br/>
                            Teacher: {student.teacher} <br/>
                            Bio: {student.bio} <br/><br/>
                            <button onClick={() => {handleDelete(student.userName)}}>
                                Delete
                            </button>
                        </li>
                    );
                })
                : "Database is down. Please check back later."
                }
                {data == ""? <p>List is empty.</p> : ""}
            </ul>
        </Layout>
    );
};

Index.getInitialProps = async () => {
    try {
        const res = await fetch('http://localhost:8000/students');
        const data = await res.json();
        return {data: data};
        
    } catch (error) {
        console.log('getInitialProps failed: ' + error.message);
        return {data: 'noDatabase'};
    }
}

export default Index;