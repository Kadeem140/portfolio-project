import { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';


const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const toggle = () => setLoginModalOpen(!loginModalOpen)

    const externalCloseBtn = (
        <Button
          type="button"
          className="close"
          style={{ position: 'absolute', top: '15px', right: '15px' }}
          onClick={toggle}
        >
          &times;
        </Button>
      );

    return (
        <>
            <span className='navbar-text ml-auto'>
                <Button
                    outline
                    onClick={() => setLoginModalOpen(true)}
                    style={{ color: 'white', border: '1px solid white' }}
                >
                    <i className='fa fa-sign-in fa-lg' /> Login
                </Button>
            </span>


            <Modal isOpen={loginModalOpen} toggle={toggle} external={externalCloseBtn}>
                <ModalHeader>Please Log In</ModalHeader>
                <ModalBody>
                <Formik 
                        initialValues= {{
                            username : '',
                            password : ''
                    }} 
                >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>
                                    Username
                                </Label>
                                <Field  
                                    id ="username" 
                                    name="username" 
                                    placeholder="Username" 
                                    className="form-control" />
                                <ErrorMessage name="username">
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>
                                    Password
                                </Label>
                                <Field 
                                    id ="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    className="form-control"/>
                                <ErrorMessage name="password">
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type="submit" color="primary">Login</Button>
                            
                        </Form>
                    </Formik>
                </ModalBody>

            </Modal>
        </>
    )
}

export default UserLoginForm;