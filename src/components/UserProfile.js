import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  //取得UserContext中的user物件
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
