import {useState} from "react";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickSave = () => {
        //TODO: Save
        alert('Profile changed successfully');
    }
    const handleClickClose = () => {
        //TODO: Close
        alert('Profile changed cancelled');
    }
    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <label>
                First Name:
                <input
                    type={"text"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                    type={"text"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClose}>Close without saving</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default EditProfile;