import React,{ Component } from "react";
import styles from "./Navbar.module.css";
import styled from "styled-components";

const Nav=styled.div`
width:100%;
height:70px;
background:linear-gradient(170deg,#1bc059,#0d47a1);
display:flex;
`;
const Title=styled.div`
position:absolute;
padding:10px;
left:43%;
font-size:2rem;
color:#6F18CD;
text-shadow:5px 2px #BA5A95;
letter-spacing:5px;
font-family:'Montserrat ,sans-serif';
font-weight:600;
&:hover{
    transform:scale(1.05);
    box-shadow: 0 0 50px #ccc;
}
`;
const CartContainer=styled.div`
cursor:pointer;
position:absolute;
right:5%;
`;
const CartIcon=styled.img`
height:35px;
margin-right:20px;
margin-top:5px;
`;
const CartCount=styled.div`
background:${(props)=>props.color};
border-radius:50%;
padding:4px 8px;
position:absolute;
right:5px;
top:-6px;
font-size:12px;
// visibility:${(props)=>props.show?"visible":"hidden"};
`; 

class Navbar extends Component{
   
    render(){  
        const {cartCount}=this.props;
        return (
            <>
              <Nav>
                <Title>MOVIE APP</Title>

                <CartContainer>
                    <CartIcon  alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
                    <CartCount color="yellow" >{cartCount}</CartCount>
                </CartContainer>
              </Nav>
            </>
        )
    }
}
export default Navbar;