import { Rubik } from 'next/font/google';
import { Metadata } from 'next';

import '../assets/global.css';

const rubik = Rubik({
  weight: ['300','400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});



export const metadata: Metadata = {
  title: 'Henki Kenya Limited',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true}>
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        className={`${rubik.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
