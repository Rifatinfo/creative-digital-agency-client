"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { IOrderHistory } from "@/types/order.interface";
import { OrderColumn } from "./OrderColumn";

interface OrdersTableProps {
  orders: IOrderHistory[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  console.log(orders);
  
  return (
    <>
      <ManagementTable
        data={orders}
        columns={OrderColumn}
        getRowKey={(order) => order.id}
        emptyMessage="No Order found"
      />
    </>
  );
};

export default OrdersTable;