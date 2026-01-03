import { Badge } from "../ui/badge";

interface StatusBadgeCellProps {
  status: string;           
}

export function StatusBadgeCell({ status }: StatusBadgeCellProps) {
  // You can map status to badge variant
  const variant = status === "PAID" ? "default" : status === "PENDING" ? "secondary" : "destructive";

  return <Badge variant={variant}>{status}</Badge>;
}
