import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-400">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-900">GlossyStack</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-xs">
              Independent, unbiased comparisons of nail and beauty salon software. 
              Helping salon owners find the right tools to grow their business.
            </p>
          </div>

          {/* Comparisons */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Comparisons</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vs/vagaro-vs-fresha" className="text-slate-600 hover:text-brand-600">Vagaro vs Fresha</Link></li>
              <li><Link href="/vs/vagaro-vs-glossgenius" className="text-slate-600 hover:text-brand-600">Vagaro vs GlossGenius</Link></li>
              <li><Link href="/vs/glossgenius-vs-mangomint" className="text-slate-600 hover:text-brand-600">GlossGenius vs Mangomint</Link></li>
              <li><Link href="/vs/boulevard-vs-zenoti" className="text-slate-600 hover:text-brand-600">Boulevard vs Zenoti</Link></li>
              <li><Link href="/vs/fresha-vs-booksy" className="text-slate-600 hover:text-brand-600">Fresha vs Booksy</Link></li>
            </ul>
          </div>

          {/* By Salon Type */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">By Salon Type</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/for/nail-salons" className="text-slate-600 hover:text-brand-600">Nail Salons</Link></li>
              <li><Link href="/for/hair-salons" className="text-slate-600 hover:text-brand-600">Hair Salons</Link></li>
              <li><Link href="/for/spas" className="text-slate-600 hover:text-brand-600">Day Spas</Link></li>
              <li><Link href="/for/solo-nail-techs" className="text-slate-600 hover:text-brand-600">Solo Nail Techs</Link></li>
              <li><Link href="/for/multi-location-salons" className="text-slate-600 hover:text-brand-600">Multi-Location</Link></li>
            </ul>
          </div>

          {/* Software Reviews */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Software Reviews</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/software/vagaro" className="text-slate-600 hover:text-brand-600">Vagaro Review</Link></li>
              <li><Link href="/software/fresha" className="text-slate-600 hover:text-brand-600">Fresha Review</Link></li>
              <li><Link href="/software/glossgenius" className="text-slate-600 hover:text-brand-600">GlossGenius Review</Link></li>
              <li><Link href="/software/boulevard" className="text-slate-600 hover:text-brand-600">Boulevard Review</Link></li>
              <li><Link href="/software/mangomint" className="text-slate-600 hover:text-brand-600">Mangomint Review</Link></li>
              <li><Link href="/faq" className="text-slate-600 hover:text-brand-600">FAQ</Link></li>
              <li><Link href="/how-we-review" className="text-slate-600 hover:text-brand-600">How We Review</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} GlossyStack. All rights reserved.</p>
          <p className="mt-2">
            Affiliate Disclosure: Some links on this site may earn us a commission at no extra cost to you. 
            We only recommend software we&apos;ve independently evaluated.
          </p>
        </div>
      </div>
    </footer>
  );
}
