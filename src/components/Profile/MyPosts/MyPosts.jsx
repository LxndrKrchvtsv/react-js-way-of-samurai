import React from 'react';
import Style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

const MyPosts = React.memo(props => {
    let postElemets = props.PostData.map(p => <Post key={p.id} message={p.message} like={p.like}/>);

    const addNewPost = (formData) => {
        props.addPost(formData.newPostBody);
    }

    return (
        <div className={Style.postsBlock}>
            <h3>My Posts</h3>
            <AddNewReduxPostForm onSubmit={addNewPost}/>
            <div className={Style.posts}>
                {postElemets}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostBody"} placeholder={"What's news?"}
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewReduxPostForm = reduxForm({form: "AddNewPostForm"})(AddNewPostForm)

export default MyPosts;