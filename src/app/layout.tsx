import { Metadata } from 'next';
import './globals.css';
import MainHeader from '@/components/mainHeader/MainHeader/MainHeader';

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>)
{
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;