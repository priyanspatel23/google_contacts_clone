import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const TopBar = ({ q, setQ }) => {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <Link to="/" className="logo">
        <svg height="28" viewBox="0 0 75 24" xmlns="http://www.w3.org/2000/svg">
          <text y="20" fontFamily="'Google Sans',sans-serif" fontSize="22" fill="#5f6368">
            Contacts
          </text>
        </svg>
      </Link>
      <SearchBar query={q} setQuery={setQ} />
      <div className="topbar-actions">
        <button className="icon-btn" title="Help">
          <i className="bi bi-question-circle"></i>
        </button>
        <button className="icon-btn" title="Settings">
          <i className="bi bi-gear"></i>
        </button>
        <button className="icon-btn" title="Apps">
          <i className="bi bi-grid-3x3-gap"></i>
        </button>
        <button className="avatar-btn">JD</button>
      </div>
    </div>
  );
};

export default TopBar;
