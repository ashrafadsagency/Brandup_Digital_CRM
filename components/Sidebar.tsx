import Link from 'next/link';
const items = ['dashboard','clients','leads','payments','tasks','follow-ups','reports','settings'];
export function Sidebar(){ return <aside className="min-h-screen w-64 border-r border-white/10 bg-white/5 p-5"><h1 className="mb-8 text-2xl font-bold text-brandGold">BrandUp AgencyOS</h1><nav className="space-y-2">{items.map(i=><Link key={i} className="block rounded-xl px-4 py-3 hover:bg-white/10" href={`/${i}`}>{i.replace('-',' ').toUpperCase()}</Link>)}</nav></aside> }
