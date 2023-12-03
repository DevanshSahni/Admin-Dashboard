import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import Page from "./Components/Page";
import DeleteAll from "./Components/DeleteAll";
import Navigation from "./Components/Navigation";

function App() {
  const [users, setUsers] = useState([]);
  const [copyData, setCopyData] = useState([...users]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setCopyData([...users]);
  }, [users]);

  useEffect(() => {
    setTotalPages(Math.ceil(copyData.length / 10));
  }, [copyData]);

  useEffect(() => {
    totalPages && setPageNumber(Math.min(pageNumber, totalPages)) ;
  }, [totalPages]);

  useEffect(() => {
    setStartIndex(pageNumber * 10 - 10);
    setEndIndex(pageNumber * 10 - 1);
  }, [pageNumber]);

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
      <DeleteAll
        users={users}
        setUsers={setUsers}
        selected={selected}
        setSelected={setSelected}
      />

      <SearchBar users={users} setCopyData={setCopyData} />

      {copyData.length ? (
        <Page
          copyData={copyData}
          users={users}
          setUsers={setUsers}
          startIndex={startIndex}
          endIndex={endIndex}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <h2>No user found.</h2>
      )}

      {copyData.length ? (
        <Navigation
          setStartIndex={setStartIndex}
          setEndIndex={setEndIndex}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={totalPages}
        />
      ) : null}
    </div>
  );
}

export default App;
