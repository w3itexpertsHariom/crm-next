import '../constant/comman.css'
import '../assets/css/style.css'

import Layout from "@/components/Layout";
export const metadata = {
  title: "W3CRM - React Nextjs Admin Dashboard Template",
  description: "Elevate your administrative efficiency and enhance productivity with the W3CRM Bootstrap Admin Dashboard Template. Designed to streamline your tasks,  this powerful tool provides a user-friendly interface, robust features, and customizable options, making it the ideal choice for managing your data and operations with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
