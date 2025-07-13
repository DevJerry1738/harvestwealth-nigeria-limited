// src/components/dropdown/Dropdown.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css'; // Optional if you're separating dropdown styles

export default function Dropdown({ onClick }) {
  return (
    <div className="dropdown-menu">
      <Link to="/epc" onClick={onClick} className="dropdown-item">EPC</Link>
      <Link to="/spa" onClick={onClick} className="dropdown-item">Switchgear Panel Assembly</Link>
    </div>
  );
}
