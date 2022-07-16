import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {authLoginTC} from "../redux/thunk/auth-thunk";
import {useTypedDispatch} from "../redux/store";

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {

    const dispatch = useTypedDispatch()

    const formik = useFormik({
        initialValues: {
            email: 'example@example.com',
            password: 'password',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            // alert(JSON.stringify(values, null, 2));
            dispatch(authLoginTC(values))
        },
    });

    return (
        <div style={{width: '300px'}}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    style={{marginBottom: '20px'}}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    style={{marginBottom: '20px'}}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};


export default Login;
