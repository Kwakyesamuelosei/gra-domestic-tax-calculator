import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const Header: React.FC = ({children}) => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand className="mx-auto">{ children }</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
