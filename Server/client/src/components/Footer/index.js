import React from 'react';
import Container from 'react-bootstrap/Container';
import './MainFooter.css';
import FontAwesome from 'react-fontawesome'
const MainFooter = (props) => {
    return (
        <footer className="footer-main">
            <Container>

                <div className="footer-text text-center py-3">

                    <a href="https://github.com/maleszewskid/Project-3"><FontAwesome className="fa fa-github"/>View Source</a>

                </div>
            </Container>
        </footer>
    )
}

export default MainFooter;
