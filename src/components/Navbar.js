import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import newLN from './ln-timbers.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import{ ButtonContainer} from './Button';
import styled from 'styled-components';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <img src={newLN} alt="store" className="navbar-brand mr-0 ml-0"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className='nav-link'>
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <FontAwesomeIcon icon={faCartPlus}/>
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
// 1rem = 16px
const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.5rem;
        text-transform: capitalize;
    }
`;