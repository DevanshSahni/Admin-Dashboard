import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "../App.css";

const DeleteAll = ({ users, setUsers, selected, setSelected }) => {
  const deleteSelected = () => {
    const filteredUsers = users.filter((user) => !selected.includes(user.id));
    setUsers(filteredUsers);
    setSelected([]);
  };

  return (
    <div>
      <button
        className="delete-selected"
        disabled={!selected.length}
        onClick={() => deleteSelected()}
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default DeleteAll;
