"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { IPayment } from "@/types/payment.interface";
import { PaymentColumn } from "./PaymentColumn";

interface PaymentsTableProps {
  payment: IPayment[];
}

const PaymentsTable = ({ payment }: PaymentsTableProps) => {
  
  return (
    <>
      <ManagementTable
        data={payment}
        columns={PaymentColumn}
        getRowKey={(payment) => payment.stripeSessionId}
        emptyMessage="No Payment found"
      />
    </>
  );
};

export default PaymentsTable;