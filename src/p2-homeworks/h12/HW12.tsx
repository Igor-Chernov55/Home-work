import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "./HW12.module.css";
import classes from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeColor} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = themes[1]; // useSelector

    const dispatch = useDispatch()
    // @ts-ignore
    const theme = useSelector<AppStoreType, string>(state => state.colorTheme.colorMain)

    const onChangeCallback = (e: any) => {
        dispatch(changeThemeColor(e))
    }

    // useDispatch, onChangeCallback

    return (

        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <div className={classes.container}>
                <SuperRadio
                    value={theme}
                    options={themes}
                    onChangeOption={(e) => onChangeCallback(e)}
                />
                </div>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
