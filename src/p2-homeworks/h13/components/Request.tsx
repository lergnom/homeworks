import React from "react";

type RequestProps = {
    data: any,
    error: boolean
}

export const Request = ({data, error}: RequestProps) => {
    console.log(error);
    return (
        <>
            <span style={error ? {color: 'red'} : {color: 'green'}}> request = {data} </span>
        </>
    )
}