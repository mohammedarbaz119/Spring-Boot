import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";

const Header = () => {
 const {user,dispatch} = useUserContext()
const navigate = useNavigate()
 const logout = ()=>{
dispatch({type:'LOGOUT'})
navigate("/login")
 }
 
return (
   
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon ={faVideoSlash}/>Gold
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>      
                </Nav>
              { !user.user && <NavLink to={"/login"}><Button variant="outline-info" className="me-2">Login</Button></NavLink>}
              { !user.user && <NavLink to={"/register"}><Button variant="outline-info">Register</Button></NavLink>}
              {user.user&&<Button onClick={logout} variant="outline-info">Logout</Button>}
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header