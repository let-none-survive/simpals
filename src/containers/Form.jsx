import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import Button from 'components/Button';

const Wrapper = styled.form`
  width: 350px;
  height: auto;
  min-height: 150px;
  background: #fff;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  border: 1px solid silver;
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid ${props => props.error ? '#ff6464' : '#ccc'};
  padding: 5px 12px;
  border-radius: 5px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #555;
  line-height: 1;
  margin: 10px 0;
  
  &:focus {
    outline: none;
  }
`;

const required = value => value ? undefined : 'Required';

const renderField = ({ input, label, placeholder,type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <Input {...input} error={touched && error} placeholder={placeholder} type={type}/>
    </div>
  </div>
);

let Form = props => {
  const { handleSubmit, submiting } = props;
  return (
    <Wrapper onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Заголовок</label>
        <Field name='title' validate={required} component={renderField} type='text' id='title' placeholder='Заголовок'/>
      </div>
      <div>
        <label htmlFor='body'>Описание</label>
        <Field name='body' validate={required} component={renderField} type='text' id='body'
               placeholder='Небольшое описание...'/>
      </div>
      <div>
        <label htmlFor='tags'>Теги</label>
        <Field name='tags' validate={required} component={renderField} type='text' id='tags' placeholder="Тег, другой тег"/>
      </div>
      <Button disabled={submiting} type='submit'>Добавить</Button>
    </Wrapper>
  );
};

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = 'Required';
  if (!values.body) errors.body = 'Required';
  if (!values.tags) errors.tags = 'Required';
  return errors
};


Form = reduxForm({
  form: 'recordForm',
  validate
})(Form);

Form.defaultProps = {
  errors: {}
};


export default Form;
