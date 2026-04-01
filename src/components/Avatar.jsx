import React, { useState } from 'react';

const COLORS = ['#1a73e8', '#ea4335', '#34a853', '#fbbc04', '#ab47bc', '#ef6c00', '#00838f', '#c62828', '#2e7d32', '#1565c0'];

export const colorFor = (name) => {
  if (!name) return COLORS[0];
  return COLORS[(name.charCodeAt(0) + (name.charCodeAt(1) || 0)) % COLORS.length];
};

export const initials = (c) => {
  if (!c || !c.first) return '';
  return (c.first[0] + (c.last ? c.last[0] : '')).toUpperCase();
}

// 🔥 gender detection
export function detectGender(name) {
  if (!name) return "unknown";

  name = name.trim().toLowerCase().split(" ")[0];

  const femalePatterns = ["a", "i", "y", "aa", "sha", "ita", "ina"];
  const malePatterns = ["n", "r", "l", "v", "k", "sh", "it", "t", "s"];

  for (let p of femalePatterns) {
    if (name.endsWith(p)) return "female";
  }

  for (let p of malePatterns) {
    if (name.endsWith(p)) return "male";
  }

  return "unknown";
}

// 🔥 avatar selector
export function getAvatar(name) {
  const gender = detectGender(name);

  if (gender === "male") return "/boy.png";
  if (gender === "female") return "/girl.png";

  return "/default.png";
}

const Avatar = ({ contact, size = 40, fontSize }) => {
  const [imgError, setImgError] = useState(false);
  const avatarPath = getAvatar(contact?.first);

  // Default text fallback if images are missing
  if (imgError) {
    return (
      <div
        className="avatar"
        style={{
          width: size,
          height: size,
          background: colorFor(contact?.first),
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Google Sans', sans-serif",
          fontWeight: 500,
          color: 'white',
          fontSize: fontSize || size * 0.4,
          flexShrink: 0,
        }}
      >
        {initials(contact)}
      </div>
    );
  }

  return (
    <img
      src={avatarPath}
      alt={contact?.first || 'Avatar'}
      onError={() => setImgError(true)}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
        flexShrink: 0,
        backgroundColor: '#f1f3f4'
      }}
    />
  );
};

export default Avatar;
