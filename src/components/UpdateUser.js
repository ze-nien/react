import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  //取得UseContext中的updateUser function
  const { updateUser } = useContext(UserContext);
  //設置newName useState
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //input有資料->updateUser更新newName, 清空input
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter New Name"
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
