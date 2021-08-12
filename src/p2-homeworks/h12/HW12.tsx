import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'none','blue'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.data.theme)
    const dispatch = useDispatch()
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={(e) => {
                        dispatch(changeThemeAC(e))
                    }}
                />
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
