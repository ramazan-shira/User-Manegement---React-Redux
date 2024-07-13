import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import {
  deleteUser,
  setUserToUpdate,
  userToUpdate,
} from "./Redux/Actions/userActions";

const UserCard = () => {
  const users = useSelector((state) => state.user.users);

  const dispatch = useDispatch();
  const removeUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const isOnEdit = useSelector((state) => state.user.isOnEdit);

  const editUser = (user) => {
    dispatch(setUserToUpdate({ isOnEdit: !isOnEdit }));
    dispatch(userToUpdate({ user }));
  };

  return (
    <div className="user-cards">
      {users.length > 0 &&
        users.map((user) => (
          <div className="user-card">
            <p>
              <span className="user-card-title">Name: </span>
              {user.firstName} {user.lastName}
            </p>
            <p>
              <span className="user-card-title">Age: </span>
              {user.age}
            </p>
            <p>
              <span className="user-card-title">Email: </span>
              {user.email}
            </p>
            <div className="card-action">
              <button onClick={() => editUser(user)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button onClick={() => removeUser(user.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserCard;
