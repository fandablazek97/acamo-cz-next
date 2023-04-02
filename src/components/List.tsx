import clsx from "clsx";

function ListItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={clsx("space-x-1", className)}>
      <span>&gt;&gt;</span>
      <span>{children}</span>
    </li>
  )
}

function List({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={className}>{children}</ul>
  )
}

export default List;
List.Item = ListItem;

