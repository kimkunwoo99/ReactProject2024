import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>KREAM</h1>
            <ul style={styles.menu}>
                <li>
                    <a href="https://kream.co.kr" style={styles.link} target="_blank" rel="noopener noreferrer">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="https://kream.co.kr/social/tabs/style_discovery" style={styles.link} target="_blank" rel="noopener noreferrer">
                    STYLE
                    </a>
                </li>
                <li>
                    <a href="https://kream.co.kr/search" style={styles.link} target="_blank" rel="noopener noreferrer">
                    SHOP
                    </a>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        position: 'sticky', // 화면 상단에 고정
        top: 0, // 맨 위에 배치
        zIndex: 1000, // 다른 요소보다 위에 표시
        backgroundColor: '#fff', // 배경색 설정
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        borderBottom: '1px solid #ddd',
    },
    logo: { fontSize: '1.5rem', fontWeight: 'bold' },
    menu: { display: 'flex', listStyle: 'none', gap: '1rem' },
    link: { textDecoration: 'none', color: '#007bff', fontWeight: 'bold' },
};

export default Navbar;