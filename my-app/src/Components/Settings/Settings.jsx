import React from 'react';

const Settings = (props) => {
    const setAvatar = (e)=> {
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
