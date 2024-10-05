import React from 'react';
import './Header.css'; // 스타일을 위한 CSS 파일 임포트

const Header = () => {
    return (
        <header className="Header">
            <div className="Portfolio">
                <h1><span role="img" aria-label="face">🧑‍💻</span>PORTFOLIO.</h1>
            </div>
            <nav className="Navigation">
                <ul>
                    <li>ABOUT</li>
                    <li>GOAL</li>
                    <li>CONTACT</li>
                    <li>☰</li>
                </ul>
                
            </nav>
        </header>
    );
}

export default Header;
