import React from "react";
import {NavLink} from "react-router-dom";
import style from "./../Dialogs.module.css"
const DialogItem = (props) => {
    let path = '/dialogs/dialog/' + props.id;
    return(
        <div className={style.dialog_item_container}>
            <div >
                <img style={{width: '30px', height: '30px', borderRadius: '20px'}} src='https://steamuserimages-a.akamaihd.net/ugc/790863483542616159/B7C2968B6FA8539B43984A4B33F16B698D66E276/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' />
            </div>
            <div className={style.dialog_item_friend}>
                <NavLink activeStyle={{color:'red'}} to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
};
export default DialogItem
