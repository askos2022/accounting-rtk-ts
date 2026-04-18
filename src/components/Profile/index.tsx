import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {useDispatch} from "react-redux";
import {clearUser} from "../../features/user/userSlice.ts";
import {clearToken} from "../../features/token/tokenSlice.ts";

const Profile = () => {
    const dispatch = useDispatch();

    const handleClickLogout = () => {
        dispatch(clearUser());
        dispatch(clearToken());
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