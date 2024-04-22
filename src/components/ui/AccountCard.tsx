import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT;

type AccountCardProps = {
  status: string;
  name: string;
  account_number: string;
  routing_number: string;
  id: string;
  created_at: string;
  updated_at: string;
};

type Balance = {
  bank_account_id: string;
  available_balance_in_cents: string;
  pending_balance_in_cents: string;
};

const AccountCard = ({ id, name, status }: AccountCardProps) => {
  const router = useRouter();
  const [balance, setBalance] = useState<Balance | null>();

  useEffect(() => {
    const fetchBalance = async () => {
      const { data } = await (await fetch(`${BASE_URL}/bank-accounts/${id}/balance`)).json();
      setBalance(data.bank_account_balance);
    };
    fetchBalance();
  }, []);

  return (
    <Card
      onClick={() => router.push(`/account?id=${id}`)}
      className="p-4 flex flex-col gap-4 w-fit bg-primary text-white cursor-pointer"
    >
      <CardTitle>{name}</CardTitle>
      <CardContent>
        <div className="flex gap-4">
          <label>Available Balance</label>
          <label>Current Balance</label>
        </div>
        <div className="flex gap-4 justify-around">
          <p>${Number(balance?.available_balance_in_cents) / 100}</p>
          <p>${Number(balance?.pending_balance_in_cents) / 100}</p>
        </div>
        <label>Status</label>
        <p>{status}</p>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
