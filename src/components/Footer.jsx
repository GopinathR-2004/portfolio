import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '40px 0', textAlign: 'center' }}>
      <div className="container">
        <p className="text-small">© {new Date().getFullYear()} Gopinath. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
