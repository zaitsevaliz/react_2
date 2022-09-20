import React, { FC, useState } from "react";
import { store } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { changeName, toggleProfile } from "../store/profile/slice";
import { selectName, selectVisible } from "../store/profile/selector";
export const Profile: FC = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const visible = useSelector(selectVisible);
    const [value, setValue] = useState('');

    return (
        <>
            <div>Profile page</div>
            <p data-testid="name">name: {name}</p>
            <p>visible:</p>
            <input type="checkbox" checked={visible} readOnly data-testid="input" />
            <button onClick={() => dispatch(toggleProfile())} data-testid="button">change visible</button>
            <p>Change name:</p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} data-testid="inputName" />
            <button onClick={() => dispatch(changeName(value))} data-testid="buttonName">change name</button>
        </>
    );
}
