import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  setUserToUpdate,
  updateUser,
} from "./Redux/Actions/userActions";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");

  const dispatch = useDispatch();

  const nameRegEx = /^[a-zA-Z]{1,50}$/;
  const ageRegEx = /^(1[01][0-9]|120|[1-9][0-9]?)$/;
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const addUser = () => {
    let valid = false;
    if (firstName === "") {
      setFirstNameError("First name cannot be empty");
      valid = false;
    } else if (!nameRegEx.test(firstName)) {
      setFirstNameError("First name can include only letters");
      valid = false;
    } else {
      setFirstNameError("");
      valid = true;
    }

    if (lastName === "") {
      setLastNameError("First name cannot be empty");
      valid = false;
    } else if (!nameRegEx.test(lastName)) {
      setLastNameError("First name can include only letters");
      valid = false;
    } else {
      setLastNameError("");
      valid = true;
    }

    if (age === "") {
      setAgeError("Age cannot be empty");
      valid = false;
    } else if (!ageRegEx.test(age)) {
      setAgeError("Age must be a number between 1 and 120");
      valid = false;
    } else {
      setAgeError("");
      valid = true;
    }

    if (email === "") {
      setEmailError("Email cannot be empty");
      valid = false;
    } else if (!emailRegEx.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
      valid = true;
    }

    if (valid) {
      dispatch(
        setUser({
          id: new Date().getTime(),
          firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
          lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
          age,
          email,
        })
      );
      setFirstName("");
      setLastName("");
      setAge("");
      setEmail("");
      setFirstNameError("");
      setLastNameError("");
      setAgeError("");
      setEmailError("");
    }
  };

  const isOnEdit = useSelector((state) => state.user.isOnEdit);

  const userToUpdate = useSelector((state) => state.user.userToUpdate);
  useEffect(() => {
    if (isOnEdit) {
      setFirstName(userToUpdate.firstName);
      setLastName(userToUpdate.lastName);
      setAge(userToUpdate.age);
      setEmail(userToUpdate.email);
    }
  }, [
    isOnEdit,
    userToUpdate.firstName,
    userToUpdate.lastName,
    userToUpdate.age,
    userToUpdate.email,
  ]);

  const handleUpdate = (user) => {
    dispatch(setUserToUpdate({ isOnEdit: false }));
    dispatch(
      updateUser({
        id: userToUpdate.id,
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
        age,
        email,
      })
    );
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
  };
  return (
    <div className="user-form">
      <h1>User Registration</h1>
      <div className="form-input">
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              placeholder="p"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>First Name</label>
          </div>
          {firstNameError && <div className="error">{firstNameError}</div>}
        </div>

        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              placeholder="p"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Last Name</label>
          </div>
          <div className="error">{lastNameError}</div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              placeholder="p"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Age</label>
          </div>
          <div className="error">{ageError}</div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              placeholder="p"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="error">{emailError}</div>
        </div>
      </div>
      <div className="actions">
        {isOnEdit ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <button onClick={addUser}>Add User</button>
        )}
      </div>
    </div>
  );
};

export default UserForm;
