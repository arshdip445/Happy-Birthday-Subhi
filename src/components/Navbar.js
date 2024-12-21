import React from "react";
import { NavLink } from "react-router-dom";  // Import NavLink

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f1f1f1' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px', justifyContent: 'center' }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#e63946' : 'black', // Active color red
              fontWeight: isActive ? 'bold' : 'normal', // Bold when active
              textDecoration: 'none', // Remove underline
              padding: '5px 10px', // Add some padding for better clickability
              borderRadius: '5px', // Rounded corners for active link
              transition: 'all 0.3s ease', // Smooth transition for hover and active styles
            })}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            style={({ isActive }) => ({
              color: isActive ? '#e63946' : 'black',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
            })}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/love-letter"
            style={({ isActive }) => ({
              color: isActive ? '#e63946' : 'black',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
            })}
          >
            Love Letter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
