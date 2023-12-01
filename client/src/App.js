import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";

function App() {
  const [users, setUsers] = useState([]);
  const [copyData, setCopyData] = useState([...users]);

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
    </div>
  );
}

export default App;
