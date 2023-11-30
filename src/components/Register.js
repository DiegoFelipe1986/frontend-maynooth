import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

    const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const [registrationError, setRegistrationError] = useState(null);
    const validateForm = (values) => {
        const errors = {};

        // Realiza las validaciones necesarias
        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Email not valid';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Must be at least 6 characters';
        }

        if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords should be equals';
        }

        return errors;
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
          // Realiza la solicitud de registro al servidor
          const response = await axios.post('http://localhost:8080/api/v1/users', {
            name: values.name,
            email: values.email,
            password: values.password,
          });

          // Maneja la respuesta del servidor según tus necesidades
          console.log('Registro exitoso:', response.data);
          setRegistrationError(null);
          navigate('/login')
          // Puedes realizar acciones adicionales después del registro, como redirigir al usuario
        } catch (error) {
            // Maneja los errores de la solicitud al servidor
            console.error('Error durante el registro:', error.response.data);

            // Verifica si el error es debido a un correo electrónico duplicado
            if (error.response.data.msg === 'This email already exists') {
              setRegistrationError('This email is already registered. Please use a different email.');
            } else {
              setRegistrationError('An unexpected error occurred during registration.');
            }
          }


        // Puedes realizar acciones adicionales después del registro, como redirigir al usuario
      };
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center mb-4">New user</h2>
                    <Formik initialValues={formData} validate={validateForm} onSubmit={handleSubmit}>
                        <Form
                            >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">User name</label>
                                <Field type="text" id="name" name="name" className="form-control" />
                                <ErrorMessage name="name" component="div" className="text-danger" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <Field type="email" id="email" name="email" className="form-control" />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field type="password" id="password" name="password" className="form-control" />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Repeat Password</label>
                                <Field type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
                                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                            </div>

                            <button type="submit" className="button-primary w-100">Sign Up</button>
                        </Form>
                    </Formik>
                    {registrationError && (
                        <div className="text-danger mt-2">{registrationError}</div>
                    )}
                </div>
            </div>
        </div>
    )
};

// eslint-disable-next-line no-undef
export default Register;