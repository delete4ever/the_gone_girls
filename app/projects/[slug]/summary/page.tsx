import Link from 'next/link';
import FadeIn from '@/app/components/FadeIn';

export default function SummaryPage() {
  return (
    <div className="bg-stone-50">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto pb-24">
        
          <FadeIn>
            {/* Header */}
            <div className="mb-16 border-b border-stone-200 pb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Lessons from Four Decades of Missing Daughters
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                This visual journey through four decades of data has revealed that the sex ratio crisis was not an accidental byproduct of policy, but a deliberate cultural choice facilitated by technology.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16 text-slate-700 leading-relaxed">

            {/* Section 1: Key Findings */}
            <FadeIn delay={0.1}>
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Findings</h2>
                <p className="mb-6">
                  Our multidimensional analysis challenges the common assumption that poverty drives demographic imbalance. Instead, the data suggests a more complex interaction between culture and modernization:
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-rose-700">
                  <li>
                    <strong>Culture over Wealth:</strong> The crisis emerged most severely in regions with deep-rooted clan structures (like Fujian and Jiangxi), regardless of their GDP. Wealth did not erase son preference; it often enabled it by providing access to medical technology.
                  </li>
                  <li>
                    <strong>The "Stopping Rule":</strong> The escalation of sex ratios from the first child to the third child reveals a specific behavioral pattern: families do not exclusively want sons, but they refuse to stop having children without one.
                  </li>
                  <li>
                    <strong>A Persistent Hierarchy:</strong> While absolute sex ratios have declined since 2010, the relative ranking of provinces has remained stable for 40 years. This geographic persistence indicates that cultural topography is harder to flatten than economic topography.
                  </li>
                </ul>
              </section>
            </FadeIn>

            {/* Section 2: Consequences */}
            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The Enduring Consequences</h2>
                <p className="mb-6">
                  China now lives with the legacy of decisions made decades ago. The "surplus men" born between 1985 and 2010 are now entering a marriage market that mathematically cannot accommodate them.
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-rose-700">
                  <li>
                    <strong>The Marriage Squeeze:</strong> An estimated 30-40 million men face permanent bachelorhood, creating a phenomenon known as "bare branches" (guanggun).
                  </li>
                  <li>
                    <strong>Economic Distortion:</strong> Bride prices (Caili) have skyrocketed, particularly in rural areas, transforming marriage into a significant economic transaction and transfer of wealth.
                  </li>
                  <li>
                    <strong>Migration & Trafficking:</strong> The scarcity of women has triggered cross-border marriage migration from neighboring countries and increased risks of trafficking.
                  </li>
                </ul>
              </section>
            </FadeIn>

            {/* Section 3: Policy Implications */}
            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Policy Implications</h2>
                <p className="mb-6">
                  China's shift to a "Three-Child Policy" is a necessary step, but demographic momentum is difficult to reverse. The data suggests that simply allowing more children is insufficient to correct imbalances in "hard core" traditional regions.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Beyond Birth Limits</h3>
                    <p>
                      Policy was a constraint, but culture was the driver. Solutions must address the root cultural causes: inheritance practices, elder care systems that rely on sons, and patrilineal traditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Supporting Women</h3>
                    <p>
                      True balance will only come when daughters are viewed as having equal economic and social potential as sons. This requires enforcing equal employment rights and ensuring that daughters can support aging parents just as effectively as sons.
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>

            <hr className="border-stone-200 my-12" />

            {/* Section 4: Final Thought */}
            <FadeIn delay={0.4}>
              <section className="bg-stone-100 p-8 rounded-xl border-l-4 border-rose-700">
                <h2 className="text-xl font-bold text-slate-900 mb-4 font-mono uppercase tracking-wider text-rose-700">
                  Final Thought
                </h2>
                <p className="mb-4 text-slate-800 font-medium">
                  This project began with a family story—my grandfather's rage, my cousin's silence. Through data visualization, I've shown how that personal story connects to national patterns.
                </p>
                <p className="italic text-slate-600">
                  "I hope that visualizing this crisis—making visible the invisible forces of culture, economics, and demographics—can help ensure it never happens again, in China or elsewhere. Because the numbers tell stories, and those stories matter."
                </p>
                <div className="mt-6 pt-6 border-t border-stone-200 text-sm font-bold text-slate-900">
                  Ludi Yang &bull; University of Bologna
                </div>
              </section>
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  );
}