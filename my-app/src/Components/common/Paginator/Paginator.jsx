import React from "react";
import style from "../../Users/Users.module.css";

const Paginator = ({page, onPageChange, currentPage}) => {
    return (
        <div
             onClick={() => {
                 onPageChange(page)
             }}
             className={`m-1 ${currentPage === page && style.currentPage}`}
             style={{cursor: 'pointer'}}>
            {
                page <= 10 && page
            }
        </div>
    )
};

export default Paginator
