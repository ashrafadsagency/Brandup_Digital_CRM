import { Sidebar } from '@/components/Sidebar';

export default function Page(){
  return <main className="flex"><Sidebar/><section className="flex-1 p-8"><h1 className="mb-4 text-3xl font-bold">projects</h1><div className="card"><p className="text-white/70">Manage projects for BrandUp AgencyOS. Connect this page with Supabase tables and forms.</p></div></section></main>
}
