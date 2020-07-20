import React, { Fragment } from 'react';
import styles from './FormsControl.module.css'


// const FormConstructor = (props) => {

//     const hasError = props.touched && props.error;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
//             <div>
//                 {props.element}
//             </div>
//             {hasError && <span>{props.error}</span>}
//         </div>
//     )
// }

// export const Textarea = ({input, meta, ...props}) => {
//     const el = React.createElement('Textarea', {...input, ...props})
//     return (
//         <FormConstructor element = {el} {...meta} />
//     )
// }

// export const Input = ({input, meta, ...props}) => {
//     const el = React.createElement('input', {...input, ...props})
//     return (
//         <FormConstructor element = {el} {...meta} />
//     )
// }

const myInput = props => {
    const { input, type, placeholder, meta } = props;
    return (
        <Fragment>
            <input {...props.input} type={props.type} placeholder={props.placeholder} />
            {meta.error &&
                meta.touched &&
                <div>
                    {meta.error}
                </div>}
        </Fragment>
    );
};
export default myInput