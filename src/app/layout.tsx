import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Next.js demo",
  description: "Generated for Next.js demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <Provider store={store}> */}
          <NavBar />
          {children}
        </AuthProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
