import React, { useState } from "react";
import "../CSS/Page.css";
import UserContainer from "./UserContainer";

const Page = ({
  copyData,
  users,
  setUsers,
  startIndex,
  endIndex,
  selected,
  setSelected,
}) => {
  const displayData = copyData.slice(startIndex, endIndex + 1);

  const toggleSelectAll = (e) => {
    if (!e.target.checked) {
      setSelected([]);
    } else {
      setSelected(displayData.map((user) => user.id));
    }
  };

  return (
    <div>
      <div className="user-container-heading user-container">
        <input
          className="select"
          type="checkbox"
          onChange={(e) => toggleSelectAll(e)}
          checked={selected.length === displayData.length}
        />
        <h3 className="user-name">Name</h3>
        <h3 className="user-email">Email</h3>
        <h3 className="user-role">Role</h3>
        <h3 className="user-actions">Actions</h3>
      </div>

      {displayData.map((user, idx) => (
        <UserContainer
          key={idx}
          user={user}
          setUsers={setUsers}
          users={users}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default Page;
