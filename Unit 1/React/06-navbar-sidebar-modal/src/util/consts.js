import {FaFacebook, FaLinkedin, FaTwitter, FaBehance} from "react-icons/fa"
import { About, Cart, Error, Home, Products } from "../Pages"
import Admin from "../Pages/Admin"

export const links = [
  {
    id:1,
    url: '/',
    text: 'Home',
    page: <Home/>
  },
  {
    id:2,
    url: '/about',
    text: 'About',
    page: <About/>
  },
  {
    id:3,
    url: '/products',
    text: 'Products',
    page: <Products/>
  },
  {
    id:4,
    url: '/cart',
    text: 'Cart',
    page: <Cart/>
  },
  {
    id: 5,
    url: "/admin",
    text: "Admin",
    page: <Admin/>
  },
  {
    id: 6,
    url: "*",
    text: "Error",
    page: <Error/>
  },
  
]

export const socials = [
  {
    id: 1,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin/>
  },
  {
    id: 2,
    url: 'https://www.facebook.com',
    icon: <FaFacebook/>
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaTwitter/>
  },
  {
    id: 4,
    url: 'https://www.behance.com',
    icon: <FaBehance/>
  }
]