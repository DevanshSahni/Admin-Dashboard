import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "../App.css";

const DeleteAll = ({ users, setUsers, selected, setSelected }) => {
  // To delete selected rows from DB
  const deleteSelected = () => {
    const filteredUsers = users.filter((user) => !selected.includes(user.id));
    setUsers(filteredUsers);
    setSelected([]);
  };

  return (
    <button
      className="delete-selected"
      disabled={!selected.length}
      onClick={() => deleteSelected()}
    >
      <AiOutlineDelete />
    </button>
  );
};

export default DeleteAll;
