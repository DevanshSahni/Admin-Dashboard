import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import Page from "./Components/Page";

function App() {
  const [users, setUsers] = useState([]);
  const [copyData, setCopyData] = useState([...users]);
  const [pageNumber, setPageNumber] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);

  useEffect(() => {
    setCopyData([...users]);
  }, [users]);

  // setStartIndex(pageNumber*10-10)
  // setEndIndex(pageNumber*10-1)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setUsers(data);
      setCopyData([...data]);
    };
    getData();
  }, []);

  return (
    <div className="admin-dashboard">
      <SearchBar users={users} setData={setCopyData} />

      <div className="user-container-heading user-container">
        <input type="checkbox" name="" id="" />
        <h3 className="display-page-user-name">Name</h3>
        <h3 className="display-page-user-email">Email</h3>
        <h3 className="display-page-user-role">Role</h3>
        <div className="display-page-actions">
          <h3>Actions</h3>
        </div>
      </div>

      <Page
        copyData={copyData}
        users={users}
        setUsers={setUsers}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
}

export default App;
