// Render Prop
import React from 'react';
import { Formik, Form, Field } from 'formik';
import classes from './PostForm.module.scss';
import Button from '../UI/Button/Button';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  comment: Yup.string()
    .min(3, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Required'),
});


const PostForm = (props) => (
  <Formik
    initialValues={{
      comment: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={(values,{resetForm}) => {
      console.log(values,'values');
      props.createCommentHandeler(values.comment,props.id);
      resetForm({});
    }}
  >
    {({ errors, touched }) => (
      <Form className={classes.form} >
        <div className={classes.inputGroup}>
          <p><label htmlFor="comment">Write you comment</label></p>
          <div className={classes.inputWr}>
            <Field
              component="textarea"
              name="comment"
              id="comment"/>
                {errors.comment && touched.comment ? (<span>{errors.comment}</span>) : null}
          </div>
        </div>
    <Button className="success" type="submit">Submit</Button>
      </Form>
    )}
  </Formik>
);

export default PostForm;
