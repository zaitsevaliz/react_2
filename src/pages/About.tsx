import React, { FC, useState } from "react";
import { store } from "../store";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { changeName, toggleProfile } from "../store/profile/actions";
import { ProfileState } from "../store/profile/reducer";
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
const mapStateToProps = (state: ProfileState) => ({
    visible: state.visible
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggle: () => dispatch(toggleProfile()),
})
export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(About);
