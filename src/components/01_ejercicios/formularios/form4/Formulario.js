
import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";


export default function Formulario() {
  const formSchema = Yup.object().shape({

    UserName: Yup.string()

      .required("Campo Requerido"),

  });

  return (
    <>
      <Formik
        initialValues={{

          UserName: "",

        }}
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>

            <label htmlFor='UserName'>Nombre Usuario: </label>
            <Field
              className='form-control'
              name='UserName'
              placeholder=''
              type='text'
            />
            <ErrorMessage
              name='UserName'
              component='div'
              className='field-error text-danger'
            />





              <button
                color='primary'
                className='mr-1 mb-1 btn-block'
                type='submit'
              >
                Guardar
              </button>

        </Form>
      </Formik>
    </>
  );
}