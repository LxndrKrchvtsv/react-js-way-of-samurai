import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControl/FormsControls";
import {reduxForm} from "redux-form";
import Style from './ProfileInfo.module.css';
import StyleError from "./../../common/FormsControl/FormsControl.module.css"

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form className={Style.profileInfoWrap} onSubmit={handleSubmit}>
            <div className={Style.profileInfoContent}>
                <div className={Style.aboutMeWrap}>
                    <div>
                        <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
                    </div>
                    <div>
                        <b>Looking for a job:</b> {createField(
                        "",
                        "lookingForAJob",
                        [],
                        Input,
                        {type: "checkbox"})
                    }
                    </div>
                    <div>
                        <b>My professional skills:</b>
                        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                    </div>
                    <div>
                        <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
                    </div>
                </div>
                <div>
                    <h2>Contacts</h2> {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={Style.contact}>
                            <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
                        </div>
                    )
                })}
                </div>
            </div>
            {error && <div className={StyleError.formSummaryError}>{error}</div>}
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm)

export default ProfileDataReduxForm;