import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormContactBtn,
  FormLabel,
  FormStyled,
  FormField,
  FormError,
  FormHiUser,
  FormHiPhone,
  FormInputWrapper,
} from './FormSubmit.styled';

export class FormSubmit extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;

    const formSchema = Yup.object({
      name: Yup.string()
        .min(1, 'Too Short Name!')
        .max(50, 'Too Long Name!')
        .required('Please write a name'),
      number: Yup.string()
        .min(9, 'Invalid Phone Number')
        .required('Please fill up the phone number!'),
    });

    return (
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          this.props.onSubmit(values);
          actions.resetForm();
        }}
      >
        <FormStyled className="contact-form">
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInputWrapper>
            <FormHiUser />
            <FormField type="text" name="name" placeholder="John Doe" />
          </FormInputWrapper>

          <FormError component="span" name="name" />

          <FormLabel htmlFor="number">Number</FormLabel>

          <FormInputWrapper>
            <FormHiPhone />
            <FormField type="number" name="number" placeholder="123 45 6789" />
          </FormInputWrapper>

          <FormError component="span" name="number" />

          <FormContactBtn type="submit">Add contact</FormContactBtn>
        </FormStyled>
      </Formik>
    );
  }
}
