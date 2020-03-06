import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                <div>
                    <NavLink to='#'>Ivan</NavLink>
                </div>
                <div>
                    <NavLink to='#'>Alex</NavLink>
                </div>
                <div>
                    <NavLink to='#'>Dima</NavLink>
                </div>
                <div>
                    <NavLink to='#'>Artem</NavLink>
                </div>

            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    Hi!
                </div>
                <div className={style.message}>
                    Yo
                </div>
            </div>
        </div>
    )
};
export default Dialogs
