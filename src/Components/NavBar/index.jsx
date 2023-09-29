import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    let activeStyle = 'underline underline-offset-8';
  return (
    <nav className='flex justify-between items-center w-full py-5 px-8 text-m'>
        <ul className='flex gap-3'>
            <li className='font-bold'>
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink to='/' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/clother' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/furnitures' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/others' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex gap-3'>
            <li className='font-sm font-light text-black/70'>
                hola@Digit3D.com
            </li>
            <li>
                <NavLink to='/my-orders' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    Sign In
                </NavLink>
            </li>
            <li>
                <NavLink to='/shopping-car' className={({ isActive }) =>isActive ? activeStyle : undefined}>
                    🛒 1
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar