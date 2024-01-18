"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './styles.module.css'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks = [
    {route: "home", pathname: "/"},
    {route: "Book tickets", pathname: "/bookTicket"},
    {route: "Now showing", pathname: "/nowShowing"},
    {route: "Contact", pathname: "/contact"}
  ]

  const pathname = usePathname()

  return (
    <html lang="en">
      <body>
        <div className={styles.header}>
          {navLinks.map(link => {
            const isActive = pathname === link.pathname
            return (
              <Link className={isActive ? styles.activeTab : undefined} href={link.pathname} key={link.route}>{link.route}</Link>
            )
          })}
        </div>
        {children}
      </body>
    </html>
  )
}
