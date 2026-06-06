import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = { title: 'BrandUp AgencyOS', description: 'Agency CRM for BrandUp Digital Marketing' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}<Analytics /></body></html>; }
