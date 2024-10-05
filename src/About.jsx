import React from 'react';
import './About.css'; // CSS 파일 불러오기

const About = () => {
    return (
        <div className="About">
            <h1>ABOUT</h1>
            <div className="Content">
                <div className="Left">
                    <div className="emoji">
                        <img src="https://example.com/your-image-url.png" alt="Profile" /> {/* 이미지 URL로 변경 */}
                    </div>
                    <h2>KWON</h2>
                    <h2>HEE Jae</h2>
                    <p>010-9368-8461</p>
                    <p>oliviarella@soonmyung.ac.kr</p>
                    <p>SAMSUNG-DONG, S. Korea</p>
                </div>
                <div className="Right">
                    <h3>EDUCATION</h3>
                    <p>2013 - 2019</p>
                    <h3>SKILLS</h3>
                    <p>Photoshop / Illustrator</p>
                    <p>Premiere Pro</p>
                    <p>3DS Max</p>
                    <p>Zbrush</p>
                    <h3>WORK</h3>
                    <p>XYZ Company / Designer</p>
                    <h3>ACTIVITIES</h3>
                    <p>Volunteer Work / Design Camp</p>
                    <h3>WORK SCOPE</h3>
                    <p>2D design</p>
                    <p>Character design</p>
                    <p>3D design</p>
                    <p>UX/UI</p>
                    <img src="./mimo.png" alt="Logos" className="Logos" /> {/* 로고 이미지 URL로 변경 */}
                </div>
            </div>
        </div>
    );
};

export default About;
