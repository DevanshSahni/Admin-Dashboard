import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { CiSaveUp2 } from "react-icons/ci";
import "../CSS/Page.css";

const UserContainer = ({ user, setUsers, users, selected, setSelected }) => {
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  // Update user info when user is changed/deleted
  useEffect(() => {
    setEmail(user.email);
    setName(user.name);
    setRole(user.role);
  }, [user]);

  // Enable editing of info
  const editUser = () => {
    setEdit(false);
  };

  // Save the editted info
  const saveUser = () => {
    setEdit(true);
    user.name = name;
    user.email = email;
    user.role = role;
  };

  // Delete a specific user row based on user ID
  const deleteUser = (id) => {
    const updatedUsers = users.filter((Singleuser) => Singleuser.id !== id);
    setUsers(updatedUsers);
  };

  // Select/deselect a single row 
  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((userID) => userID !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div
      className="user-container"
      style={{
        backgroundColor: selected.includes(user.id) ? "#c0c0c0" : "#f8f8f8",
      }}
    >
      <input
        className="select"
        type="checkbox"
        name=""
        id=""
        onChange={() => toggleSelect(user.id)}
        checked={selected.includes(user.id)}
      />
      <input
        className="user-info user-name"
        type="text"
        value={name}
        disabled={edit}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="user-info user-email"
        type="text"
        value={email}
        disabled={edit}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="user-info user-role"
        type="text"
        value={role}
        disabled={edit}
        onChange={(e) => {
          setRole(e.target.value);
        }}
      />

      <div className="user-actions">
        <button
          className="edit action"
          onClick={() => (edit ? editUser() : saveUser())}
        >
          {edit ? <FiEdit /> : <CiSaveUp2 />}
        </button>
        <button className="delete action" onClick={() => deleteUser(user.id)}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default UserContainer;
