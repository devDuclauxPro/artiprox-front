import { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

// Composant Layout qui encapsule la structure globale de la page
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
