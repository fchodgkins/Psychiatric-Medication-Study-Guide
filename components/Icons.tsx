import React from 'react';

interface IconProps {
  className?: string;
}

export const BrainIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7v0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7v0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2Z" />
    <path d="M12 12a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 12 17v0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 12 12Z" />
    <path d="M4.5 7A2.5 2.5 0 0 0 7 9.5v0A2.5 2.5 0 0 0 4.5 12v0A2.5 2.5 0 0 0 2 9.5v0A2.5 2.5 0 0 0 4.5 7Z" />
    <path d="M19.5 7A2.5 2.5 0 0 0 22 9.5v0A2.5 2.5 0 0 0 19.5 12v0A2.5 2.5 0 0 0 17 9.5v0A2.5 2.5 0 0 0 19.5 7Z" />
    <path d="M12 17a2.5 2.5 0 0 1-2.5 2.5v0A2.5 2.5 0 0 1 7 17v0" />
    <path d="M12 17a2.5 2.5 0 0 0 2.5 2.5v0A2.5 2.5 0 0 0 17 17v0" />
  </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

export const GraduationCapIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const BiohazardIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
      <path d="M12.5 16.5a4.5 4.5 0 1 0 0-9" />
      <path d="M12.5 7.5h-1" />
      <path d="M12.5 7.5a4.5 4.5 0 1 0-9 0" />
      <path d="M3.5 7.5h1" />
      <path d="m8 12.5-4.5 7" />
      <path d="m8 12.5 4.5 7" />
      <path d="M8 12.5a4.5 4.5 0 1 0 9 0" />
      <path d="M17 12.5h-1" />
    </svg>
);

export const FirstAidKitIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20.5 13.5A4.5 4.5 0 0 1 16 18H8a4.5 4.5 0 0 1-4.5-4.5V8A4.5 4.5 0 0 1 8 3.5h8A4.5 4.5 0 0 1 20.5 8v5.5Z"/>
        <path d="M12 15.5v-7"/>
        <path d="M8.5 12h7"/>
    </svg>
);

export const WalkingIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
    <path d="M12 18v-8"/>
    <path d="M14 20l-2-2-2 2"/>
    <path d="m6 12-2-3 4-1"/>
    <path d="m18 12 2-3-4-1"/>
  </svg>
);