import React from "react";
import style from "./FormControls.module.css"

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return(
        <div className={hasError ? style.formControl + ' ' + style.error : ''}>
            <div>
                <textarea className={style.input} {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return(
        <div className={hasError ? style.formControl + ' ' + style.error : ''}>
            <div>
                <input autoComplete='off' aria-atomic={false} {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>

        </div>
    )
};
