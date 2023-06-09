import clsx from "clsx";

export default function Paragraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={clsx("max-w-prose", className)}>{children}</p>
  )
}