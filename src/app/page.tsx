"use client";
import React, { useEffect, useState } from "react";
import AccountCard from "@/components/ui/AccountCard";

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT;

const BankAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      setIsLoading(true);
      try {
        const { data } = await (await fetch(`${BASE_URL}/bank-accounts`)).json();
        if (!data) {
          throw new Error("Network response was not ok");
        }
        setAccounts(data.bank_accounts);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Bank Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            <AccountCard {...account} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankAccounts;
