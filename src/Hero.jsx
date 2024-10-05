import React from 'react';
import './Hero.css'; // 스타일을 위한 CSS 파일 임포트

const Hero = () => {
    return (
        <section className="Hero">
            <h1>안녕하세요!</h1>
            <h2>제 이름은 권희재 입니다.</h2>
            <h3>소통하는 개발자가 되고 싶어요.</h3>
            <div className="emoji">
                <img src="./mimo.png" alt="프로필 이모지" />
            </div>
            <button className="GoButton">Go!</button>
        </section>
    );
}

export default Hero;
