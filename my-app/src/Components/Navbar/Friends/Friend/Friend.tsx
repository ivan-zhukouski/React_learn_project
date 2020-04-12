import React, {FC} from "react";
import style from "../../Navbar.module.css";

type PropsType = {
    name:string
}
const Friend:FC<PropsType> = (props) => {
    return(
        <div className={style.friend_item}>
            <div>
                <img alt='ss' src='https://steamuserimages-a.akamaihd.net/ugc/790863483542616159/B7C2968B6FA8539B43984A4B33F16B698D66E276/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'/>
            </div>
            <div className={style.ml}>
                {props.name}
            </div>
        </div>
    )
};
export default Friend
