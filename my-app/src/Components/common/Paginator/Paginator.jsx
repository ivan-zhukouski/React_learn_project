import React, {useState} from "react";
import style from "../../Users/Users.module.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Button from '@material-ui/core/Button';

const Paginator = ({onPageChange, currentPage, totalUsersCount, pageSize, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;

    return (
        <div className='d-flex m-2'>
            <div>
                {portionNumber > 1 && <Button variant='contained' color="primary" onClick={() => {setPortionNumber(portionNumber - 1) }}>
                    <NavigateBeforeIcon/>
                </Button>}
            </div>
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p) => {
                    return (
                        <div
                            key={p}
                            onClick={() => {
                                onPageChange(p)
                            }}
                            className={`m-1 ${currentPage === p && style.currentPage}`}
                            style={{cursor: 'pointer'}}>
                            {p}
                        </div>
                    )
                })
            }
            <div>
                {portionCount > portionSize && <Button variant='contained' color="primary" onClick={()=> setPortionNumber(portionNumber + 1)}>
                    <NavigateNextIcon/>
                </Button>}
            </div>

        </div>
    )
};
export default Paginator
