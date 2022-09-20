import React, { FC, useState } from "react";
import { store, StoreState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { changeName, toggleProfile } from "../store/profile/slice";
import { Profile } from "./Profile";
export const About: FC = ({ visible, toggle }: any) => {
    return (
        <>
            <div>About page</div>
            <p>visible:</p>
            <input type="checkbox" checked={visible} readOnly />
            <button onClick={() => toggle()}>change visible</button>
        </>
    );
};
const mapStateToProps = (state: StoreState) => ({
    visible: state.profile.visible
})


const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggle: () => dispatch(toggleProfile()),
})
export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(About);
