import React, {useState} from 'react';
import Style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, isOwner, saveAvatar, saveProfile, status, updateUserStatus}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            });
    }

    return (
        <div>
            <div className={Style.descriptionBlock}>
                <div className={Style.avatarWrap}>
                    <h1>My profile</h1>
                    <img src={profile.photos.large || userPhoto}/>
                    {isOwner && <input type={"file"} onChange={onAvatarSelected}/>}
                </div>
                {editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
                    <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode, status, updateUserStatus}) => {
    return (
        <div className={Style.profileInfoWrap}>
            <div className={Style.profileInfoContent}>
                <div className={Style.aboutMeWrap}>
                    <h2>Description</h2>
                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                    <div>
                        <b>Full name:</b> {profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {profile.lookingForAJob &&
                    <div>
                        <b>My professional skills:</b> {profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        <b>About me:</b> {profile.aboutMe}
                    </div>
                </div>
                <div>
                    <h2>Contacts</h2> {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
                </div>
            </div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;