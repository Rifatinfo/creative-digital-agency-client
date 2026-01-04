import { Badge } from "../ui/badge";

interface StatusBadgeCellProps {
  status: string;
}

export function StatusBadgeCell({ status }: StatusBadgeCellProps) {
  const variant =
    status === "CONFIRMED"
      ? "default"
      : status === "PENDING"
      ? "secondary"
      : "destructive";

  return <Badge variant={variant}>{status}</Badge>;
}
