import React, {FC} from 'react';
type PropsType = {
    updateMyPhoto:(any:any)=>void
}
const Settings:FC<PropsType> = (props) => {
    const setAvatar = (e:any)=> {
        if(e.target.files.length){
            props.updateMyPhoto(e.target.files[0])
        }
    };
    return(
        <div>
            <div className='m-3'>
                1.Change avatar
                <input type='file' onChange={setAvatar}/>
            </div>
        </div>
    )
};
export default Settings
