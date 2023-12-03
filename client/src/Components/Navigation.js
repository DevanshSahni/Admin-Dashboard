import React from "react";
import { MdFirstPage, MdLastPage, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "../CSS/Navigation.css";


const Navigation = ({ setStartIndex, setEndIndex, pageNumber, setPageNumber, totalPages }) => {
  // Show maximum of only 5 pages button in navigation to avoid crowding
  const arr = Array.from({ length: Math.min(totalPages, 5) }, (v, i) =>
    pageNumber > 5 ? pageNumber - (5 - i) : i
  );

  // Navigate to different pages
  const jumpPage= (page) =>{
    setPageNumber(page);
    setStartIndex(page*10-10)
    setEndIndex(page*10-1)
  }

  return (
    <div className="navigation">
      <h4>Page {pageNumber} of {totalPages}</h4>
      <div className="navigation-container">
        <button className="navigate-button first-page" disabled={pageNumber===1} onClick={()=>jumpPage(1)}><MdFirstPage/></button>
        <button  className="navigate-button previous-page" disabled={pageNumber===1} onClick={()=>jumpPage(pageNumber-1)}><MdNavigateBefore/></button>

        {arr.map((idx)=> {
          const currentPage=idx+1;
          return <button key={idx} className="navigate-button" onClick={()=>jumpPage(currentPage)}> <h4>{currentPage} </h4> </button>
        })}

        <button  className="navigate-button next-page" disabled={pageNumber===totalPages} onClick={()=>jumpPage(pageNumber+1)}><MdNavigateNext/></button>
        <button  className="navigate-button last-page" disabled={pageNumber===totalPages} onClick={()=>jumpPage(totalPages)}><MdLastPage/></button>
      </div>
    </div>
  );
};

export default Navigation;
