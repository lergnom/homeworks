import React from "react";
import img from "./lines.gif"
import s from "./Preloader.module.css"

export const Preloader = () => {
    return <>
        <div className={s.imgWrapper}>
            <img className={s.img} src={img}/>

        </div>
    </>
}