import React from "react";

function CreateButton({className, onCreate}){
    return(
        <>
            <button onClick={onCreate} className={className}>Save</button>
        </>
    )
}

function UpDateButton({onUpdate, className}){
    return (
        <>
            <button className={className} onClick={onUpdate}>Save</button>
        </>
    )
}

function DeleteButton({onDelete, className, getIndex}){
    return(
        <>
            <button className={className} onClick={() => onDelete(getIndex)}>Delete</button>
        </>
    )
   
}

export {CreateButton, UpDateButton, DeleteButton}