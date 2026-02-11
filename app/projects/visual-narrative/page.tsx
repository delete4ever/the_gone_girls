import NotebookFrame from '@/app/components/NotebookFrame';
import FadeIn from '@/app/components/FadeIn';

export default function SummaryPage() {
  return (
    <div className="bg-stone-50">
      <div className="w-full py-16 px-4 lg:px-8 space-y-32 pb-32">
        {/* HEADER */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              A Visual Narrative
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              From the emergence of a national crisis to the specific behaviors of families. 
              This analysis visualizes four decades of demographic distortion.
            </p>
          </FadeIn>
        </header>

      <div className="prose prose-lg prose-slate max-w-3xl mx-auto prose-p:my-10">
        {/* --- CHAPTER 1 --- */}
        <section id="chapter-1" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <span className="text-rose-700 font-mono text-sm uppercase tracking-wider font-bold block mb-2">
                Chapter 1
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The National Crisis Emerges</h2>
              <h3 className="text-xl font-medium text-slate-500 italic mb-6">
                "From Balance to Crisis: Four Decades of Demographic Distortion"
              </h3>
              <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed space-y-8">
              <p>
                When my grandfather feared that "the Yang family line would end" with the birth of a granddaughter, he expressed a concern shared by millions of Chinese families nationwide. But his individual anxiety, when multiplied across an entire nation, created something unprecedented in human history: a systematic demographic imbalance that would reshape Chinese society for generations.
              </p>

              <p>
                This visualization maps how that transformation happened—not through abstract policy analysis, but through the actual numbers: the sex ratios recorded at every birth, tracked across every year, revealing the moment when China's demographic balance tipped into crisis.
              </p>
              </div>
            </div>
          </FadeIn>

          {/* --- CHART: Trend --- */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-[1400px] mx-auto my-12 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
              <div className="w-full h-[500px] md:h-[600px]">
                <NotebookFrame 
                  src="/notebooks/trend.html" 
                  title="National Sex Ratio Trend" 
                  className="w-full h-full border-none" 
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
           {/* --- CHAPTER 1: TIMELINE ANALYSIS --- */}
            <div className="max-w-3xl mx-auto py-12 px-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center">
                <span className="bg-rose-500 w-2 h-8 mr-4 rounded-full"></span>
                Key Observations: The 50-Year Trajectory
              </h3>

              <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
                
                {/* Phase 1: Stability */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase mb-2">
                    1970 - 1982
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Biological Baseline</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Despite social upheaval, SRB hovers at <span className="font-semibold text-slate-900 text-lg">106-107</span>. The natural balance remains intact.
                  </p>
                </div>

                {/* Phase 2: Escalation */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow-sm"></div>
                  <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase mb-2">
                    1982 - 2008
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 mb-2 text-rose-700">Systematic Escalation</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    A sharp climb to a peak of <span className="font-semibold text-rose-600 text-lg">121</span>. This period marks the diffusion of ultrasound technology.
                  </p>
                  
                  {/* Policy Callout - 嵌套的小卡片 */}
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-sm">
                    <p className="font-bold text-slate-700 mb-2">Policy & Tech Milestones:</p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• <span className="font-medium">1980s:</span> 1.5-child policy & Ultrasound spread (SRB 108 → 111)</li>
                      <li>• <span className="font-medium">1990s:</span> Full One-child policy implementation (SRB → 118)</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3: Correction */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase mb-2">
                    2008 - Present
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">The Correction Phase</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Sustained decline to approximately <span className="font-semibold text-blue-600 text-lg">111</span>. Driven by policy relaxation and social awareness.
                  </p>
                  
                  {/* 底部高亮总结 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-3 bg-white border border-blue-100 rounded shadow-sm">
                      <p className="text-xs text-slate-400 uppercase font-bold">Driver 1</p>
                      <p className="text-sm font-medium text-slate-700">Stricter enforcement of sex-determination bans.</p>
                    </div>
                    <div className="p-3 bg-white border border-blue-100 rounded shadow-sm">
                      <p className="text-xs text-slate-400 uppercase font-bold">Driver 2</p>
                      <p className="text-sm font-medium text-slate-700">Cultural evolution & Women’s labor participation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 2 --- */}
        <section id="chapter-2" className="w-full flex flex-col items-center pt-24 border-t border-stone-200">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <span className="text-rose-700 font-mono text-sm uppercase tracking-wider font-bold block mb-2">
                Chapter 2
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Geography of Imbalance</h2>
              <h3 className="text-xl font-medium text-slate-500 italic mb-6">
                "Not All Regions Are Equal: Mapping the Crisis Across China's Provinces"
              </h3>
              <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed space-y-8">
              <p>
                When my grandfather raged about the Yang family line potentially ending, he was standing in Hubei Province, in central-south China. But what if our family had lived in Tibet? Or Xinjiang? Or the Northeast? Would his reaction have been the same?
              </p>

              <p>
                The data reveal a striking truth: China's sex ratio crisis was never nationally uniform. Instead, it concentrated in specific geographic regions while largely sparing others. The map of sex selection in China is also a map of cultural geography, economic development, and traditional kinship structures.
              </p>

              <p>
                This chapter visualizes geography—showing not only which provinces had the worst imbalances, but also how the crisis emerged, spread, peaked, and persisted across space and time.
              </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 2.1 --- */}
        <section id="chapter-2-1" className="w-full flex flex-col items-center pt-20">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2.1 The Heat of Imbalance: Seeing Patterns Across Time and Space
              </h2>
              <p>
                A heatmap matrix with provinces as rows, census years (1982, 1990, 2000, 2005, 2010, 2015, 2020) as columns. Color intensity represents SRB severity—darkest colors (deep red) indicate ratios of 130-135, lightest (blue) indicate 102-107.
              </p>
            </div>
          </FadeIn>

          {/* CHART: Heatmap */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[750px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/heatmap.html" title="Provincial Heatmap" />
            </div>
          </FadeIn>


          {/* --- ANALYSIS: Key Patterns --- */}
          <FadeIn delay={0.3}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Patterns:</h3>

              <div className="space-y-6">
                {/* Geographic concentration */}
                <div>
                  <p className="font-bold text-slate-800 mb-2">Geographic concentration:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Darkest provinces (SRB 125-135 at peak):</strong> Anhui, Hainan consistently show deepest red in 2000-2005 columns, followed by Henan, Guangxi, Jiangxi, Hunan, Hubei
                    </li>
                    <li>
                      <strong>Moderate (SRB 115-125):</strong> Shaanxi, Fujian, Guangdong show orange-red during peak years
                    </li>
                    <li>
                      <strong>Light (SRB 105-110):</strong> Tibet, Xinjiang, and Shanghai remain consistently blue throughout—the crisis barely touched these provinces
                    </li>
                  </ul>
                </div>

                {/* Temporal synchronicity */}
                <div>
                  <p className="font-bold text-slate-800 mb-2">Temporal synchronicity:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>The 2000 and 2005 columns are uniformly darkest</strong>—virtually all provinces peaked simultaneously, suggesting standard external drivers (technology availability, policy pressure)
                    </li>
                    <li>
                      <strong>Earlier columns (1982, 1990) show progressive darkening</strong>—crisis building gradually
                    </li>
                    <li>
                      <strong>Later columns (2015, 2020) show widespread lightning</strong> correction happening nationally, but unevenly
                    </li>
                  </ul>
                </div>

                {/* Persistence of hierarchy */}
                <div>
                  <p className="font-bold text-slate-800 mb-2">Persistence of hierarchy:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provinces that were darker in 1990 (Anhui, Henan, Jiangxi) remain relatively darker in 2020</li>
                    <li>Provinces that stayed light in 1990 (Tibet, Xinjiang) remain the lightest in 2020</li>
                    <li>
                      <strong>The rank ordering barely changes across 40 years</strong>—suggesting structural (cultural) rather than transient (policy/economic) differences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <p className="border-l-4 border-rose-700 pl-4 italic bg-rose-50 p-4 rounded mt-6 text-slate-800">
                <strong>Critical Insight:</strong> The stable geographic hierarchy across four decades indicates deep-rooted regional differences in son preference. Culture, not policy alone, determines severity.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 2.2 --- */}
        <section id="chapter-2-2" className="w-full flex flex-col items-center pt-32">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2.2 The Spatial Wave: Watching the Crisis Spread Across China's Map
              </h2>
              <p>
                An animated choropleth map of China with provinces colored by SRB. Animation advances through seven time points. The interactive slider allows manual navigation.
              </p>
            </div>
          </FadeIn>

          {/* CHART: Animated */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[650px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/animated.html" title="Animated Map" />
            </div>
          </FadeIn>
       

        {/* --- ANALYSIS: Key Observations by Frame --- */}
          <FadeIn delay={0.4}> {/* */}
            {/* --- CHAPTER 2.2: SPATIAL EVOLUTION TIMELINE --- */}
            <div className="max-w-3xl mx-auto py-12 px-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center">
                <span className="bg-amber-500 w-2 h-8 mr-4 rounded-full"></span>
                Spatial Evolution: The Crisis Wave
              </h3>

              <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
                
                {/* 1982: The Calm */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-200 border-4 border-white shadow-sm"></div>
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase mb-2">
                    1982
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 mb-2 italic">The Calm Before</h4>
                  <div className="text-slate-600 leading-relaxed space-y-2 text-sm">
                    <p>• Map appears predominantly <span className="font-semibold text-orange-600">light peach/pale orange</span>—most provinces at 105-109.</p>
                    <p>• Only slight elevation in Anhui, Henan, Jiangxi (109-110). Geographic pattern not yet established.</p>
                  </div>
                </div>

                {/* 1990: Crystallization */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm"></div>
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase mb-2">
                    1990
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Pattern Crystallizes</h4>
                  <div className="text-slate-600 leading-relaxed space-y-3">
                    <p className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400 text-sm">
                      <span className="font-bold text-orange-900 text-base">A distinct "crisis arc" emerges:</span> Darkening visible from Shaanxi through the central heartland (Henan, Anhui, Hubei) down to Guangdong.
                    </p>
                    <ul className="text-sm space-y-1 pl-2">
                      <li>• <span className="font-medium text-slate-800 italic text-sm">Periphery stays light:</span> Northeast and Far West remain near-normal or moderate.</li>
                    </ul>
                  </div>
                </div>

                {/* 2000-2005: Maximum Darkness */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-rose-700 border-4 border-white shadow-sm"></div>
                  <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase mb-2">
                    2000 - 2005
                  </span>
                  <h4 className="text-xl font-bold text-rose-900 mb-2">Maximum Darkness</h4>
                  <div className="text-slate-700 leading-relaxed space-y-3">
                    <p className="text-sm italic">Central and eastern provinces turn <span className="font-bold text-rose-700">deep red/purple</span>.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-rose-50 border border-rose-100 rounded-lg text-sm">
                        <p className="font-bold text-rose-800 uppercase text-[10px] mb-1">Hotspots</p>
                        <p>Anhui & Jiangxi are <span className="font-bold">nearly black</span> (SRB ~128-130). The Henan-Hubei-Hunan triangle forms a dark cluster.</p>
                      </div>
                      <div className="p-3 bg-rose-50 border border-rose-100 rounded-lg text-sm">
                        <p className="font-bold text-rose-800 uppercase text-[10px] mb-1">Wealthy Coast</p>
                        <p>Guangdong, Fujian, Zhejiang also turn dark (120-125) despite economic development.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2010-2020: Fade */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow-sm"></div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase mb-2">
                    2010 - 2020
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Gradual Fade</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Colors lighten across the board, but the <span className="font-semibold text-slate-900">geographic signature remains unchanged</span>. Anhui and Henan remain darker orange, while the periphery stays light blue.
                  </p>
                </div>

              </div>
            </div>
          </FadeIn>

            {/* --- ANALYSIS: Spatial Insights --- */}
          <FadeIn delay={0.5}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12">
              <div className="border-l-4 border-rose-700 pl-4 bg-rose-50 p-6 rounded mt-6 text-slate-800">
                <p className="text-xl font-bold mb-4">Spatial Insights:</p>
                
                <p className="italic mb-4">
                  The crisis wasn't diffuse—it concentrated in a specific <strong>geographic corridor</strong>:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4 italic">
                  <li>
                    <strong>Coincides with:</strong> Dense Han Chinese population, traditional agricultural regions, historical cultural centers
                  </li>
                  <li>
                    <strong>Avoids:</strong> Ethnic minority regions (Tibet, Xinjiang, Inner Mongolia western), Frontier areas (Northeast), Some southwestern provinces (Yunnan, Guizhou)
                  </li>
                </ul>
                
                <p className="italic font-medium">
                  This suggests that <strong>cultural geography</strong>, rather than a uniform national culture, drove the crisis.
                </p>
              </div>
            </div>
          </FadeIn>
         </section>

        {/* --- CHAPTER 2.3 --- */}
        <section id="chapter-2-3" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2.3 Regional Rankings: The Persistent Hierarchy

              </h2>
              <p>
                Grouped bar chart showing six regions' average SRB across seven census points. Regions: Central & South (blue), North China (green), Northeast (teal), Northwest (orange), Southwest (cyan).
              </p>
            </div>
          </FadeIn>

          {/* CHART: Average */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[600px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/average.html" title="Regional Averages" />
            </div>
          </FadeIn>

          {/* --- ANALYSIS: Regional Hierarchy --- */}
          <FadeIn delay={0.3}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Persistent hierarchy—rankings barely change:</h3>

              <div className="space-y-8">
                {/* Tier 1 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2">Tier 1 (Highest SRB): Central & South and East China</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Central & South (purple bars):</strong> Consistently highest or second-highest, peaking at 127 in 2000, still 116 in 2020</li>
                    <li><strong>East China (red bars):</strong> Trading #1/#2 position with Central & South, peaks at 121 in 2005-2010, remains 114 in 2020</li>
                    <li>These two regions consistently exceed the national average by 3-8 points</li>
                  </ul>
                </div>

                {/* Tier 2 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2">Tier 2 (Moderate): North China and Northwest</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>North China (green bars):</strong> Ranks #3-4 throughout, peaks at 116 in 2005, drops to 107 in 2020</li>
                    <li><strong>Northwest (orange):</strong> Ranks #3-5, peaks at 115 in 2005, down to 108 in 2020</li>
                    <li>Elevated but less extreme than leaders</li>
                  </ul>
                </div>

                {/* Tier 3 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2">Tier 3 (Lowest/Most Balanced): Northeast and Southwest</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Northeast (teal bars):</strong> Consistently #5-6, peaks at only 113 in 2010, down to 108 in 2020</li>
                    <li><strong>Southwest (cyan):</strong> Often the lowest ranking, peaks at 113 in 2010, down to 108 in 2020</li>
                    <li>Closest to biological norms throughout</li>
                  </ul>
                </div>
              </div>

              {/* Temporal Pattern Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Temporal pattern—all regions move together:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                  <li><strong>1982-2000:</strong> All bars rise proportionally—universal escalation</li>
                  <li><strong>2000-2010:</strong> Peak period, all regions reach maximum</li>
                  <li><strong>2010-2020:</strong> All bars decline proportionally—universal correction</li>
                </ul>
              </div>
            </div>
            </FadeIn>

              {/* --- FINAL INSIGHT: Regional Dynamics --- */}
              <FadeIn delay={0.4}>
                <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12">
                  <p className="border-l-4 border-rose-700 pl-4 italic bg-rose-50 p-6 rounded mt-6 text-slate-800">
                    <strong>Critical Insight:</strong> If a crisis were driven by policy (uniform across regions) or technology (diffused everywhere), we'd expect convergence. Instead, we see parallel movement with stable hierarchy—indicating <strong>structural regional differences</strong> (culture, kinship systems) that policy and technology affected but didn't create.
                  </p>
                </div>
              </FadeIn>
        </section>

        {/* --- CHAPTER 3 --- */}
        <section id="chapter-3" className="w-full flex flex-col items-center">
           <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <span className="text-rose-700 font-mono text-sm uppercase tracking-wider font-bold block mb-2">
                Chapter 3
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Cultural Roots & Economic Paradoxes</h2>
              <h3 className="text-xl font-medium text-slate-500 italic mb-6">
                "Why Geography Mattered: Culture, Wealth, and the Price of Sons"
              </h3>
              <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed space-y-8">
              <p>
                My grandfather's fury about the Yang family line ending wasn't a personal quirk—it was the expression of a cultural system that had shaped our family for generations. The Yang family genealogy book (族谱), carefully maintained and updated, traced our patrilineal descent through centuries. Our ancestral graves required male descendants to perform ritual worship. Our family property would pass through the male line.
              </p>

              <p>
               But why did this cultural system have such a strong hold in some regions of China and not others? And why didn't economic development—rising education, urbanization, women's labor force participation—eliminate these traditional preferences as modernization theory predicts?
              </p>
              
              <p>
                This chapter examines the paradoxes: why wealthy regions showed severe imbalances, how traditional culture proved more potent than economic incentives, and how we can measure and visualize the consequences of this cultural persistence.
              </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 3.1 --- */}
        <section id="chapter-3-1" className="w-full flex flex-col items-center pt-20">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3.1 The Wealth Paradox: Why Rich Regions Suffered Too
              </h2>
              <p>
                Choropleth map of China with provinces colored by GDP per capita (2020). Dark blue indicates the highest wealth ($80,000-100,000+), light blue indicates the lowest ($20,000-40,000). Measured in USD.
              </p>
            </div>
          </FadeIn>

          {/* CHART: GDP */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[600px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/gdp.html" title="GDP Per Capita Map" />
            </div>
          </FadeIn>

          {/* --- ANALYSIS: The Development Paradox --- */}
          <FadeIn delay={0.3}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">The Development Paradox:</h3> {/* */}

              <p className="font-bold text-slate-800 mb-4">When compared with SRB data:</p> {/* */}

              <div className="space-y-8">
                <div>
                  <p className="font-bold text-slate-800 mb-2 underline decoration-rose-200 underline-offset-4">Wealthy provinces with HIGH SRB:</p> {/* */}
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Jiangsu</strong> (GDP ~$100k, 2000 SRB ~125)</li> {/* */}
                    <li><strong>Zhejiang</strong> (GDP ~$100k, 2005 SRB ~119)</li> {/* */}
                    <li><strong>Fujian</strong> (GDP ~$80k, 2000 SRB ~123)</li> {/* */}
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-2 underline decoration-blue-200 underline-offset-4">Poor provinces with NORMAL/LOW SRB:</p> {/* */}
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Tibet</strong> (GDP ~$35k, SRB consistently 105-108)</li> {/* */}
                    <li><strong>Qinghai</strong> (GDP ~$40k, SRB 106-110)</li> {/* */}
                    <li><strong>Guizhou</strong> (GDP ~$40k, SRB 110-115, lower than wealthier neighbors)</li> {/* */}
                  </ul>
                </div>
              </div>

              <p className="mt-8 leading-relaxed">
                <strong>This inverts modernization theory predictions:</strong> Development should reduce son preference through education, urbanization, and women's labor participation. Instead, wealth enabled sex selection in regions with pre-existing cultural preferences.
              </p>

              {/* Summary Insight Box */}
              <div className="border-l-4 border-rose-700 pl-4 bg-rose-50 p-6 rounded mt-8 text-slate-800 italic">
                <strong>Critical Insight:</strong> GDP doesn't predict SRB. Wealth provided the <em>means</em> (medical technology, safe abortion access) but not the <em>motive</em> (son preference). Culture determines whether families use available technology for sex selection.
              </div>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 3.2 --- */}
        <section id="chapter-3-2" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3.2 Three Dimensions: SRB, Culture, and Consequences
              </h2>
              <p>
                Three choropleth maps side-by-side, all using the exact geographic boundaries.
              </p>
            </div>
          </FadeIn>

          {/* CHART: Compare */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-4xl mx-auto h-[1850px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/compare.html" title="Comparison Maps" />
            </div>
          </FadeIn>

        {/* --- ANALYSIS: Three Dimensions Comparison --- */}
          <FadeIn delay={0.3}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12">
              
              {/* Map 1 Analysis */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Map 1: Sex Ratio at Birth 2020 - The Current State</h3> {/* */}
                <p className="mb-4">Even in 2020, after years of decline, the geographic pattern persists:</p> {/* */}
                <ul className="list-none pl-0 space-y-4">
                  <li>
                    <span className="font-bold text-slate-900 block">Darkest (SRB 112-115):</span> {/* */}
                    <ul className="list-disc pl-5">
                      <li>Anhui, Henan, Jiangxi, Shaanxi, Guangxi</li> {/* */}
                      <li>Still showing elevated ratios despite improvement from peak</li> {/* */}
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-slate-900 block">Moderate (SRB 109-112):</span> {/* */}
                    <ul className="list-disc pl-5">
                      <li>Jiangsu, Zhejiang, Fujian, Guangdong, Hubei, Hunan</li> {/* */}
                      <li>Above the national average of 111, but less extreme</li> {/* */}
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-slate-900 block">Lightest (SRB 105-108):</span> {/* */}
                    <ul className="list-disc pl-5">
                      <li>Tibet, Xinjiang, Qinghai (105-107)</li> {/* */}
                      <li>Northeast provinces (108-110)</li> {/* */}
                      <li>Beijing, Shanghai (108-109)</li> {/* */}
                    </ul>
                  </li>
                </ul>
                <p className="mt-4 italic">The map shows that son preference hasn't disappeared—it has receded, but it remains strongest in the traditional core.</p> {/* */}
              </div>

              {/* Map 2 Analysis */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Map 2: Clan Density - The Cultural Foundation</h3> {/* */}
                <p className="mb-4">This map visualizes an invisible phenomenon: the strength of traditional patrilineal kinship structures, measured by the concentration of genealogical books (族谱).</p> {/* */}
                
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-300 mb-6">
                  <p className="font-bold text-slate-900 mb-2">Darkest (Highest Clan Density 2.0-3.0):</p> {/* */}
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Anhui, Jiangxi, Fujian:</strong> The absolute cores of traditional Han Chinese kinship</li> {/* */}
                    <li><strong>Hunan, Hubei, Henan, Zhejiang, Jiangsu:</strong> Very high clan density</li> {/* */}
                    <li><strong>Guangdong:</strong> Elevated, though with regional variation</li> {/* */}
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm italic">
                    <p>• Family genealogies meticulously maintained</p> {/* */}
                    <p>• Ancestral halls (祠堂) dot the landscape</p> {/* */}
                    <p>• Lineage organizations remain socially powerful</p> {/* */}
                    <p>• Patrilineal descent defines family identity</p> {/* */}
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-300 mb-6">
                <p className="font-bold text-slate-900 mb-2">Lightest (Lowest Clan Density 0-0.5):</p> {/* */}
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Tibet, Xinjiang:</strong> Entirely different cultural systems (Tibetan Buddhism, Islam)</li> {/* */}
                  <li><strong>Northeast:</strong> Frontier region, settled relatively recently (post-1700s), weak clan structures</li> {/* */}
                  <li><strong>Qinghai, Gansu:</strong> Mixed ethnic areas</li> {/* */}
                  <li><strong>Yunnan, Guizhou:</strong> Ethnic minority regions with diverse kinship traditions</li> {/* */}
                </ul>
              </div>
              </div>

              {/* Map 3 Context */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Map 3: Bride Price 2020 - The Economic Consequences</h3> {/* */}
                <p className="mb-4">This map shows average 彩礼 (bride price) payments in 2020, based on Tencent Guyu Data Studio's survey.</p> {/* */}
                
                <p className="font-bold text-slate-800 mb-2">Understanding 彩礼 (Cǎilǐ): China's Bride Price Tradition</p> {/* */}
                <p className="mb-4 text-sm leading-relaxed">
                  彩礼 is a monetary payment (plus gifts) from the groom's family to the bride's family during marriage negotiations. This isn't "buying a bride"—it represents:
                </p> {/* */}
                <ul className="list-disc pl-5 space-y-1 text-sm italic">
                  <li>Compensation for the bride's family losing a daughter who joins another household</li> {/* */}
                  <li>Demonstration of the groom's family's financial capability</li> {/* */}
                  <li>Social prestige and "face."</li> {/* */}
                  <li>Formal recognition of obligations between families</li> {/* */}
                </ul>
              </div>

              {/* The Overlap Summary Box */}
              <div className="border-l-4 border-rose-700 pl-4 bg-rose-50 p-6 rounded mt-12 text-slate-800">
                <h4 className="text-lg font-bold mb-4">The Overlap:</h4> {/* */}
                
                <div className="space-y-6">
                  <div>
                    <p className="font-bold underline decoration-rose-200">Provinces like Anhui and Henan:</p> {/* */}
                    <ul className="list-disc pl-5 text-sm">
                      <li>Dark on all three maps</li> {/* */}
                      <li>Strong traditional culture → severe sex selection → expensive brides today</li> {/* */}
                      <li>The families that desperately wanted sons 20-30 years ago now pay crushing prices to marry them</li> {/* */}
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold underline decoration-blue-200">Provinces like Tibet and Xinjiang:</p> {/* */}
                    <ul className="list-disc pl-5 text-sm">
                      <li>Light on all three maps</li> {/* */}
                      <li>Different cultural systems → no sex selection → balanced marriage markets</li> {/* */}
                      <li>Avoided the trap entirely</li> {/* */}
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold underline decoration-slate-300">Provinces like Jiangsu and Zhejiang:</p> {/* */}
                    <ul className="list-disc pl-5 text-sm">
                      <li>Dark clan density + moderate-dark SRB + very high 彩礼</li> {/* */}
                      <li>Wealthy enough to afford high prices, but prices are inflated by both wealth display AND demographic scarcity</li> {/* */}
                      <li>Culture persisted despite development, creating a crisis even in prosperity</li> {/* */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 3.3 --- */}
        <section id="chapter-3-3" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3.3 The Multidimensional Reality: Seeing All Variables Together
              </h2>
              <p>
                This visualization brings together all the threads into a single multidimensional view:
                <ul>
                  <li>
                    X-axis: Bride Price (2020, in 10k RMB) - economic consequence
                  </li>
                  <li>
                    Y-axis: Sex Ratio at Birth (2020) - current demographic state
                  </li>
                  <li>
                    Z-axis: Clan Density - cultural foundation
                  </li>
                  <li>
                    Sphere size: GDP per capita (2020) - economic development level
                  </li>
                </ul>

              </p>
            </div>
          </FadeIn>

          {/* CHART: Scatter */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[700px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/scatter.html" title="Multidimensional Scatter Plot" />
            </div>
          </FadeIn>

        {/* --- ANALYSIS: Key Clusters Grid --- */}
          <FadeIn delay={0.3}>
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-8 border-l-4 border-rose-500 pl-4">
                Key Clusters Analysis
              </h3>

              {/* 2x2 网格容器 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Cluster 1: Crisis Epicenter */}
                <div className="bg-rose-50/50 p-6 rounded-xl border-t-4 border-rose-400 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Cluster 1</span>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">"Crisis Epicenter"</h4>
                  <div className="text-sm space-y-2 text-slate-700">
                    <p>📍 <span className="font-semibold text-rose-700">Location:</span> High Z, High Y, High X</p>
                    <p>🗺️ <span className="font-semibold text-rose-700">Provinces:</span> Zhejiang, Fujian, Jiangxi</p>
                    <p>💡 <span className="font-semibold text-rose-700">Insight:</span> Strongest traditional culture meeting high economic capability, leading to severe sex selection and crushing bride prices.</p>
                  </div>
                </div>

                {/* Cluster 2: Wealthy Traditional */}
                <div className="bg-amber-50/50 p-6 rounded-xl border-t-4 border-amber-400 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Cluster 2</span>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">"Wealthy Traditional"</h4>
                  <div className="text-sm space-y-2 text-slate-700">
                    <p>📍 <span className="font-semibold text-amber-700">Location:</span> Mid-high Z, Y, X</p>
                    <p>🗺️ <span className="font-semibold text-amber-700">Provinces:</span> Hunan, Hubei, Anhui</p>
                    <p>💡 <span className="font-semibold text-amber-700">Insight:</span> Traditional culture persisted through development. Moderate sex selection with high (but relatively affordable) bride prices.</p>
                  </div>
                </div>

                {/* Cluster 3: Balanced Periphery */}
                <div className="bg-indigo-50/50 p-6 rounded-xl border-t-4 border-indigo-400 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Cluster 3</span>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">"Balanced Periphery"</h4>
                  <div className="text-sm space-y-2 text-slate-700">
                    <p>📍 <span className="font-semibold text-indigo-700">Location:</span> Very low Z, Low Y, X</p>
                    <p>🗺️ <span className="font-semibold text-indigo-700">Provinces:</span> Tibet, Xinjiang, Qinghai</p>
                    <p>💡 <span className="font-semibold text-indigo-700">Insight:</span> Different cultural systems led to balanced marriage markets and minimal bride prices, regardless of economic level.</p>
                  </div>
                </div>

                {/* Cluster 4: Frontier Han */}
                <div className="bg-sky-50/50 p-6 rounded-xl border-t-4 border-sky-400 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Cluster 4</span>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">"Frontier Han"</h4>
                  <div className="text-sm space-y-2 text-slate-700">
                    <p>📍 <span className="font-semibold text-sky-700">Location:</span> Low Z, Low-medium Y, X</p>
                    <p>🗺️ <span className="font-semibold text-sky-700">Provinces:</span> Liaoning, Jilin, Heilongjiang</p>
                    <p>💡 <span className="font-semibold text-sky-700">Insight:</span> Weak clan structures despite Han ethnicity. Minimal sex selection and moderate bride prices in these frontier regions.</p>
                  </div>
                </div>


              {/* Summary Insight Box */}
              <div className="border-l-4 border-rose-700 pl-4 bg-rose-50 p-6 rounded mt-12 text-slate-800">
                <p className="italic">
                  <strong>Critical Insight:</strong> This single visualization captures the entire causal story: traditional culture - sex selection - marriage crisis, with wealth (size/color) as enabler but not driver. The 3D spatial separation of clusters shows these aren't random variations—they're structurally distinct demographic regimes determined by kinship systems.
                </p>
              </div>
            </div>
          </div>
          </FadeIn>
          </section>


        {/* --- CHAPTER 4 --- */}
        <section id="chapter-4" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <span className="text-rose-700 font-mono text-sm uppercase tracking-wider font-bold block mb-2">
                Chapter 4
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How Families Behaved</h2>
              <h3 className="text-xl font-medium text-slate-500 italic mb-6">
                "Selecting Until Success: The Birth Order Pattern"
              </h3>
              <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed space-y-8">
              <p>
                My uncle's family had a daughter in 2010. For six years, they attempted to conceive a second child. When my aunt finally got pregnant again, I don't know for sure whether they used an ultrasound for sex determination—but when she gave birth to a son, the family's relief was palpable. They had achieved what they needed: at least one son.
              </p>
              <p>
                This pattern—accepting daughters but insisting on at least one son—is the behavioral signature of son preference in China. It's not about wanting only sons; it's about the risk of having no sons.
              </p>
              <p>
                The 2020 census, for the first time, published data on sex ratios broken down by birth order, allowing us to see precisely how families behaved when faced with daughters.
              </p>
              <p>
                Below is an animated choropleth map cycling through five birth orders. The interactive slider allows manual selection. Color intensity represents SRB at each parity level.
              </p>
              </div>
            </div>
          </FadeIn>

          {/* CHART: Birth Order */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[700px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/birth_order.html" title="Birth Order Analysis" />
            </div>
          </FadeIn>

          {/* --- ANALYSIS: Birth Order Patterns --- */}
          <FadeIn delay={0.3}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Frame-by-Frame Analysis:</h3>

              <div className="space-y-10">
                {/* First Births */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">First Births: Relatively Balanced</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Map appears predominantly light peach/pale orange</li>
                    <li><strong>Most provinces:</strong> SRB 105-111</li>
                    <li><strong>Even high-preference provinces moderate:</strong> Anhui, Henan, Jiangxi show 109-111 (elevated but not catastrophic)</li>
                    <li><strong>Tibet, Xinjiang, Qinghai:</strong> 105-107 (normal)</li>
                  </ul>
                  <p className="mt-3 italic text-slate-600 bg-slate-50 p-4 rounded-r border-l-4 border-slate-200">
                    <strong>Interpretation:</strong> Families willing to accept first daughter, hoping for a son later; pressure not yet intense.
                  </p>
                </div>

                {/* Second Birth */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">Second Birth: Pattern Emerges</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The map darkens considerably</li>
                    <li><strong>High-preference provinces intensify:</strong> Anhui, Henan, Jiangxi, Shaanxi darken to 115-125 (orange-red)</li>
                    <li><strong>Moderate provinces show clear elevation:</strong> Jiangsu, Zhejiang, Hubei, and Hunan reach 112-118</li>
                    <li><strong>Low-preference provinces stay moderate:</strong> Tibet, Xinjiang 106-109; Northeast 110-113</li>
                  </ul>
                  <p className="mt-3 italic text-slate-600 bg-slate-50 p-4 rounded-r border-l-4 border-slate-200">
                    <strong>Interpretation:</strong> Families whose first child was a daughter now sex-selecting to ensure the second is a son—classic "parity progression" behavior.
                  </p>
                </div>

                {/* Third Births */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">Third Births: Intensity Escalates</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The map turns distinctly darker in traditional regions</li>
                    <li><strong>Crisis provinces reach extremes:</strong> Anhui, Henan, Jiangxi turn deep red (130-140)</li>
                    <li><strong>At SRB 140:</strong> Roughly 58% of third births are male (vs. the natural 51%)</li>
                    <li><strong>Moderate provinces show a strong preference:</strong> Guangdong, Fujian, and Hubei reach 120-130</li>
                    <li><strong>Even low-preference regions elevate:</strong> Tibet, Xinjiang, now 108-112</li>
                  </ul>
                  <p className="mt-3 italic text-slate-600 bg-slate-50 p-4 rounded-r border-l-4 border-slate-200">
                    <strong>Interpretation:</strong> Families with two daughters are desperately selecting a son on the third attempt.
                  </p>
                </div>

                {/* Fourth/Fifth Births */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">Fourth/Fifth Births: Extreme Ratios</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Some provinces approach or exceed SRB 150-200+</li>
                    <li><strong>Nearly all fourth/fifth births are male</strong> in high-preference provinces</li>
                    <li>Sample sizes are smaller (fewer families reach 4-5 children), but the pattern is unmistakable</li>
                  </ul>
                  <p className="mt-3 italic text-slate-600 bg-slate-50 p-4 rounded-r border-l-4 border-slate-200">
                    <strong>Interpretation:</strong> "Selecting until success"—families continue until achieving at least one son.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
    </div>
  );
}