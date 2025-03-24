import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/new-products">NEW PRODUCTS</Link></li>
        <li><Link to="/specials">SPECIALS</Link></li>
        <li><Link to="/my-account">MY ACCOUNT</Link></li>
        <li><Link to="/site-map">SITEMAP</Link></li>
        <li><Link to="/contacts">CONTACTS</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li className="searchBox1"><input type="text" placeholder="Search" id="searchBox1" /></li>
        <li className="icon"><a href="javascript:void(0);"><i className="material-icons w3-large">menu</i></a></li>
      </ul>
    </nav>
  );
};

