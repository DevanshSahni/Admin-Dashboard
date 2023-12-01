import React from "react";
import "../CSS/Page.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Page = ({ copyData, users, setUsers, startIndex, endIndex }) => {
  const displayData = copyData.slice(startIndex, endIndex + 1);

  const editUser = (id) => {
    
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id != id));
  };
  return (
    <div>
      {displayData.map((user) => {
        return (
          <div className="user-container">
            <input type="checkbox" name="" id="" />
            {/* <input className="display-page-user-name" type="text" value={user.name}/> */}
            <h4 className="display-page-user-name">{user.name}</h4>
            <h4 className="display-page-user-email">{user.email}</h4>
            <h4 className="display-page-user-role">{user.role}</h4>
            <div className="display-page-actions">
              <div className="display-page-edit-icon" onClick={()=>editUser(user.id)}>
                <FiEdit />
              </div>
              <div className="display-page-delete-icon" onClick={()=>deleteUser(user.id)} >
                <AiOutlineDelete />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
