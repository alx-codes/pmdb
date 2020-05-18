import React from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = (props) => {
	const StyledHeader = styled.header``;

	return (
		<StyledHeader>
			<Navbar variant="dark" bg="dark">
				<Navbar.Brand>pMDb</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="ml-auto">
					<Nav.Link href="#home">Movies</Nav.Link>
					<Nav.Link href="#link">T.V.</Nav.Link>
				</Nav>
			</Navbar>
		</StyledHeader>
	);
};

export default Header;