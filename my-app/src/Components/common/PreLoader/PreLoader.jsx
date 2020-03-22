import React from "react";
import preloader from "../../../assets/images/preloader1.gif"
const PreLoader = ()=> {
    return(
        <div className='m-3'>
            <img style={{width:'50px'}} src={preloader}/>
        </div>
    )
};
export default PreLoader
