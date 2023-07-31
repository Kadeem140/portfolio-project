import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    Form,
    FormGroup,
    Label, 
    Input, 
    FormText 
 } from "reactstrap";
 import { NavLink } from 'react-router-dom';
 import UserLoginForm from '../Features/user/UserLoginForm';

 const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true); 

    return (
        <Navbar dark color='success' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                {/* <img src={NucampLogo} alt='nucamp logo' className='float-start' /> */}
                <h1 className='mt-1'>Game Store</h1>
            </NavbarBrand>
            <Collapse isOpen={menuOpen} navbar> 
                <Form className='ms-xl-auto'>
                    <FormGroup>
                        <Label for="exampleSearch">Search</Label>
                        <i className="fa fa-search fa-lg" >
                            <Input type="search" name="search" id="exampleSearch" placeholder="search games here" />
                        </i> 
                    </FormGroup>
                </Form>
            
                <Nav className='ms-auto' navbar> 
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/shop'>
                            <i className='fa fa-cart fa-lg' /> Shop
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/Total'>
                            <i className='fa fa-home fa-lg' /> Total orders
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className="fa fa-shopping-cart fa-lg" /> Cart
                        </NavLink>
                    </NavItem>
                 </Nav> 
                 <UserLoginForm />
             </Collapse>
        </Navbar>
    );
 };

 export default Header;