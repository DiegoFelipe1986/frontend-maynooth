// Registration.js
import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
          navigate('/');
        }
      }, [navigate]);

    const validateForm = (values) => {
        const errors = {};

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


        return errors;
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
          const response = await axios.post(`http://localhost:8080/api/v1/users/login`, {
            email: values.email,
            password: values.password,
          });


        // Extraer el token de la respuesta
        const token = response.data.token;

        // Almacenar el token en el Local Storage
        localStorage.setItem('authToken', token);
        console.log(token, 'pasa aqui')
        navigate('/');

        } catch (error) {
          console.error('Error during login:', error.response.data);
          setError(error.response.data)
        }
      };
    return (
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center mb-4">Login</h2>
                    <Formik initialValues={formData} validate={validateForm} onSubmit={handleSubmit}>
                        <Form
                            >
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

                            <button type="submit" className="button-primary w-100">Sign In</button>
                        </Form>
                    </Formik>
                    {error && <div style={{ color: 'red' }}>{error.msg || 'An unexpected error occurred.'}</div>}
                </div>
            </div>
        </div>
        </>
    )
};

export default Login;