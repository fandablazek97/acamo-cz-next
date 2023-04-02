import clsx from 'clsx';
import React from 'react';

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  color?: "default" | "green" | "blue" | "orange" | "red" | "muted";
  hasMarginBottom?: boolean;
  className?: string;
}

const colorClasses = {
  default: "",
  green: "text-green-400",
  blue: "text-blue-400",
  orange: "text-orange-400",
  red: "text-red-400",
  muted: "text-zinc-500",
}

export default function Heading({
  level,
  children,
  color = "default",
  hasMarginBottom,
  className,
}: Props) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <div className={clsx("max-w-prose flex gap-2", colorClasses[color], hasMarginBottom && "mb-4", className)}>
    <span>===</span>
    <Component>{children}</Component>
    <span>===</span>
    </div>
  )
}