import React from "react";
// @ts-ignore
import soundfile from "./../../sounds/audio.mp3"
import style from "./Music.module.css"
const Music = (props:any) => {
    return(
        <div className='d-flex justify-content-center m-3'>
            <div className={style.outline_none}>
                <audio className={style.outline_none} src={soundfile} controls>
                </audio>
            </div>
        </div>
    )
};
export default Music
