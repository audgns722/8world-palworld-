import Footer from "@/components/layout/Footer";
import "../assets/sass/style.scss";

import Header from "@/components/layout/Header";

export const metadata = {
  title: "PalWorld WEB",
  description: "팰월드, 팔월드, palworld, 팰",
  icons: {
    icon: "",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  );
}
