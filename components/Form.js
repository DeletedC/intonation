import React from 'react';

const Form = (props) => {

    

    const [formData, setFormData] = React.useState(props.initial);

    React.useEffect(() => {
        setFormData(props.initial);
    }, [props.initial])

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    return (
        <form>
            <input 
                type="text" 
                name="userName" 
                placeholder="User Name"
                value={formData.userName}
                onChange={handleChange}>
            </input>
            <input 
                type="text" 
                name="firstName" 
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}>
            </input>
            <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}>
            </input>
            <input 
                type="number"
                    min="1"
                    max="100"
                name="age" 
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}>
            </input>
            <input 
                type="text" 
                name="bio" 
                placeholder="Bio"
                value={formData.bio}
                onChange={handleChange}>
            </input>
            <input 
                type="number"
                    min="1"
                    max="10"
                name="level" 
                placeholder="Level"
                value={formData.level}
                onChange={handleChange}>
            </input>
            <input 
                type="text" 
                name="teacher" 
                placeholder="Teacher"
                value={formData.teacher}
                onChange={handleChange}>
            </input>
            <button onClick={(event) => {
                props.handleSubmit(formData);
                setFormData(props.initial);
                event.preventDefault();
            }}>SUBMIT</button>
        </form>
    );
};

export default Form;