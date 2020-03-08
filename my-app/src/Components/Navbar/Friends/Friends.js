import React from "react";
import style from "./../Navbar.module.css"
const Friends = () => {
    return(
        <div>
            <h3>Friends</h3>
            <div className={style.friends_container}>
                <div className={style.friend_item}>
                    <div>
                        <img src='https://steamuserimages-a.akamaihd.net/ugc/790863483542616159/B7C2968B6FA8539B43984A4B33F16B698D66E276/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'/>
                    </div>
                    <div>
                        Dimon
                    </div>
                </div>
                <div className={style.friend_item}>
                    <div>
                        <img src='https://steamuserimages-a.akamaihd.net/ugc/790863483542616159/B7C2968B6FA8539B43984A4B33F16B698D66E276/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'/>
                    </div>
                    <div>
                        Alex
                    </div>
                </div>
                <div className={style.friend_item}>
                    <div>
                        <img src='https://steamuserimages-a.akamaihd.net/ugc/790863483542616159/B7C2968B6FA8539B43984A4B33F16B698D66E276/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'/>
                    </div>
                    <div>
                        Artem
                    </div>
                </div>
                <div className={style.friend_item}>
                    <div>
                        <img src='https://steamuserimages-a.akamaihd.net/ugc/790863483542616159/B7C2968B6FA8539B43984A4B33F16B698D66E276/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'/>
                    </div>
                    <div>
                        Artem
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Friends
