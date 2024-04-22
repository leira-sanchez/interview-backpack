import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around items-center p-4 border-b border-secondary">
      <Link href="/">
        <h1>Backpack529</h1>
      </Link>
      <ul className="flex gap-4">
        <Link href="/">
          <li>Accounts</li>
        </Link>
        <Link href="/account-settings">
          <li>Account Settings</li>
        </Link>
        <Link href="/transactions">
          <li>Transactions</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
