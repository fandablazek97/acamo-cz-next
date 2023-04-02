import React from 'react';

export default function ExternalLink({
  href = "",
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target='_blank' rel='noopenner noreferrer' className='hover:text-blue-400'>{children}</a>
  )
}