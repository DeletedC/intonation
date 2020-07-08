import React from 'react';

const NewStudent = (props) => {

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
                type="text" 
                name="level" 
                placeholder="Level"
                value={formData.level}
                onChange={handleChange}>
            </input>
            <button onClick={() => {
                props.handleSubmit(formData);
                setFormData(props.initial);
            }}>SUBMIT</button>
        </form>
    );
};

export default NewStudent;