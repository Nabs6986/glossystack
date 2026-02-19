import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-pink-100/50 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-400">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold text-slate-900">GlossyStack</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/vs/vagaro-vs-fresha" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Comparisons</Link>
          <Link href="/for/nail-salons" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">By Salon Type</Link>
          <Link href="/use-case/online-booking" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Use Cases</Link>
          <Link href="/software/vagaro" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Reviews</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/vs/vagaro-vs-fresha"
            className="rounded-lg bg-brand-400 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-brand-500 hover:shadow-md hover:-translate-y-0.5"
          >
            Compare Software
          </Link>
        </div>
      </div>
    </header>
  );
}
