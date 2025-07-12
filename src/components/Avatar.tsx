import React from 'react';
import getColorFromName from '..//color';

type Props = {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
};

const Avatar: React.FC<Props> = ({ name, src, size = 'md' }) => {
  const bgColor = getColorFromName(name);
  const initials = name
    .split(' ')
    .filter(n => n)
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full text-white font-medium aspect-square ${sizeMap[size]}`}
      style={{
        backgroundColor: src ? 'transparent' : bgColor,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="rounded-full object-cover w-full h-full"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
