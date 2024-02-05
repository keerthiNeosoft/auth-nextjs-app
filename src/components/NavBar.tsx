"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/styles.module.css";

export default function NavBar() {
  const navLinks = [
    { route: "Home", pathname: "/" },
    { route: "Book tickets", pathname: "/bookTicket" },
    { route: "Now showing", pathname: "/nowShowing" },
    { route: "Contact", pathname: "/contact" },
    { route: "Sign Out", pathname: "/api/auth/signout" },
  ];

  const pathname = usePathname();

  return (
    <>
      <main className={styles.header}>
        {navLinks.map((link) => {
          const isActive = pathname === link.pathname;
          return (
            <Link
              className={isActive ? styles.activeTab : undefined}
              href={link.pathname}
              key={link.route}
            >
              {link.route}
            </Link>
          );
        })}
      </main>
    </>
  );
}
