import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";

const Profile = () => {
    const handleClickLogout = () => {
        // TODO: logout
        alert('Logout successful!');
    }
    return (
        <div>
            <ProfileData/>
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser/>
        </div>
    );
};

export default Profile;