import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/users/add">Add User</Link>
                {
                    user?.email ?
                        <Box className="logoContainer">
                            <Button onClick={logout}>Logout</Button>
                        </Box>
                        :
                        <Button as={Link} to="/login">Login</Button>
                }
            </nav>
        </div >
    );
};

export default Header;