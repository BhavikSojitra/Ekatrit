import { useRouter } from "next/router";
import Meta from "src/core/components/Meta";
import Navbar from "src/core/components/Navbar";

const hideNavbarPages = ["/success", "/login"];

export default function AppLayout({ children }) {
  const router = useRouter()
  const hideNavbar = hideNavbarPages.includes(router.asPath)

  return (
    <>
      <Meta />
      {hideNavbar ? null : <Navbar />}
      {children}
    </>
  );
}
