import React from 'react';
import bgimg from '../../imgs/bgimg.png'; // 배경 이미지 import

const Hero = () => {
    return (
        <div style={{ ...styles.hero, backgroundImage: `url(${bgimg})` }}>
        </div>
    );
};

const styles = {
    hero: {
        textAlign: 'center',
        padding: '3rem 2rem', // 전체 여백을 줄임
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px', // 섹션 높이를 줄임
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: '1rem',
    },
};

export default Hero;