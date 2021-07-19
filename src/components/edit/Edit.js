import React from 'react';
import { EditContainer } from './style';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import swal from 'sweetalert';


const Edit = ({phone}) => {
    const Edit = Yup.object({
        name: Yup.string().required("Full Name is Required !"),
        email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required !"),
        phone: Yup.string().required("Subject is Required !"),
    })
    return (
        <EditContainer>
            <Formik
                initialValues={{ name: '', email: '', phone: '' }}
                validationSchema={Edit}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const headers = {
                            'Content-Type': 'Application/json',
                            'Authorization': 'Bearer Token',
                        };
                        const { id } = this.props.match.params;
                        const body = JSON.stringify(values)
                        const response = await axios.post(`https://randomuser.me/api/?results/${id}`, body, { headers })
                        console.log({ response })
                        if (response) {
                            if (response.data.success) {
                                swal("Great Job!", response.data.message, 'success')
                                resetForm({ values: { name: "", email: "", phone: "", } });
                            } else {
                                swal("Oops", response.data.message, "error")
                            }
                        } else {
                            swal("Oops", "something went wrong with your network", "error")
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form className="row g-3">
                        <div className="col-md-12">
                            <Field type="text" id="name" name="name" className="form-control form-control-lg" placeholder="First Name" required />
                            {errors.name && touched.name ? (
                                <div className="text-danger">{errors.name}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12">
                            <Field type="email" id="email" name="email" className="form-control form-control-lg" placeholder="Email address" required />
                            {errors.email && touched.email ? (
                                <div className="text-danger">{errors.email}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12">
                            <Field type="text" id="phone" name="phone" className="form-control form-control-lg" placeholder="Phone" required />
                            {errors.phone && touched.phone ? (
                                <div className="text-danger">{errors.phone}</div>
                            ) : null}
                        </div>
                        <div className="col-12">
                            <button className="btn btn-purple text-white float-end bttn-submit" type="submit">Submit</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </EditContainer>
    )
}

export default Edit
