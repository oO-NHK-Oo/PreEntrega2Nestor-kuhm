import React from 'react'
import logo from "../Img/Logo.png"
import "../Styles/Header.css"

import {Link} from "react-router-dom"

const Header = () => {
  return (
    <Link to={"/"}>
    <img src={logo} alt="" />
    </Link>
  )
}

export default Header