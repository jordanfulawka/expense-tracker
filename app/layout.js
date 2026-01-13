import './globals.css';
import './fanta.css';
import Head from './Head';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata = {
  title: 'Expense Tracker · The Subscription Tracker',
  description: 'Track all your subscription analytics!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head />
      <body>{children}</body>
    </html>
  );
}
