import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; KREAM Corp.</p>
        </footer>
    );
};

const styles = {
    footer: { textAlign: 'center', padding: '1rem', background: '#f8f9fa', marginTop: '2rem' }
};

export default Footer;