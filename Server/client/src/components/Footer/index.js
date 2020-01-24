import React from 'react';
import Container from 'react-bootstrap/Container';
import './MainFooter.css';

const MainFooter = (props) => {
    return (
        <footer className="footer-main">
            <Container>

                <div className="footer-text text-center py-3">

                    <a href="https://github.com/maleszewskid/Project-3"><i className="fa fa-github" id="footer-a">View Source</i></a>

                </div>
            </Container>
        </footer>
    )
}

export default MainFooter;
