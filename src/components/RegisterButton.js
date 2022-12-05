import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from 'react-router-dom';
import RegisterLoginPage from '../pages/RegisterLoginPage'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-bootstrap';

function RegisterButton() {
    return (
      <Router>
      <h1>hahahhahahaha</h1>
      <Link to='/RegisterLoginPage'>
      <button>
        <a href='../pages/RegisterLoginPage.js'>Register</a>
      </button>
      </Link>
      </Router>
    )
}
export default RegisterButton