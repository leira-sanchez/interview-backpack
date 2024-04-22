"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

type AccountSettingsProps = {
  status: string;
  name: string;
  account_number: string;
  routing_number: string;
  id: string;
  created_at: string;
  updated_at: string;
};

const AccountSettings = ({
  status,
  name,
  account_number,
  routing_number,
}: AccountSettingsProps) => {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push("/account-settings")}
      className="p-4 flex flex-col gap-4 w-fit bg-primary text-white"
    >
      <CardTitle>{name}</CardTitle>
      <CardContent>
        <div className="flex gap-4">
          <label>Account Number</label>
          <label>Routing Number</label>
        </div>
        <div className="flex gap-4">
          <p>{account_number}</p>
          <p>{routing_number}</p>
        </div>
        <label>Status</label>
        <p>{status}</p>
      </CardContent>
    </Card>
  );
};

export default AccountSettings;
