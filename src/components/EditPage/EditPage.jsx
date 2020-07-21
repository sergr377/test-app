import React from 'react';
import s from '../MainPage/MainPage.module.css';
import { Link } from "react-router-dom"
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../Validation/Validation';
import { Textarea } from '../FormsControls/FormsControl';
import { connect } from 'react-redux';

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <div className={s.feedBlock}>
            <form onSubmit={props.handleSubmit}>
                <span>
                    <Field className={s.fieldBlock}
                        name="link"
                        component={Textarea}
                        placeholder="Cсылка"
                        validate={[required]} />
                </span>
                <span>
                    <span>
                        <div>
                            <Field className={s.fieldBlock}
                                name="headerPost"
                                component={Textarea}
                                placeholder="Заголовок новости"
                                validate={[required]} />
                        </div>
                        <div>
                            <Field className={s.fieldBlock}
                                name="mainPost"
                                component={Textarea}
                                placeholder="Новость"
                                validate={[required]} />
                        </div>
                    </span>
                </span>
                <div>
                    <button> New posts </button>
                </div>
            </form>
        </div>
    )
}

AddNewPostForm = reduxForm({ form: "AddNewPostForm" })(AddNewPostForm)

export default function EditPage(props) {

    let onAddPost = (value) => {
        props.addPost(value);
    };

    return (
        <div className={s.mainPage}>
            <div>
                {props.feeds.map(item =>
                    <div >
                        <form className={s.feedBlock} onSubmit={props.handleSubmit}>
                            <Field className={s.picCol}
                                name="link"
                                component={Textarea}
                                placeholder={item.link}
                                validate={[required]} />
                            <div>
                                <Field className={s.feedCol}
                                    name="headerPost"
                                    component={Textarea}
                                    placeholder={item.title}
                                    validate={[required]} />
                            </div>
                            <div>
                                <Field className={s.feedCol}
                                    name="mainPost"
                                    component={Textarea}
                                    placeholder={item.description}
                                    validate={[required]} />
                            </div>
                            <div>
                                <button id={item.id} >Edit</button>
                            </div>
                        </form>
                    </div>
                )}
                <AddNewPostForm onSubmit={onAddPost} />
            </div>
        </div >
    );
}

EditPage = reduxForm({ form: "EditPostForm" })(EditPage)
