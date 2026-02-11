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
              
              <p>
                When my grandfather feared that "the Yang family line would end" with the birth of a granddaughter, he expressed a concern shared by millions of Chinese families nationwide. But his individual anxiety, when multiplied across an entire nation, created something unprecedented in human history: a systematic demographic imbalance that would reshape Chinese society for generations.
              </p>
              <p>
                This visualization maps how that transformation happened—not through abstract policy analysis, but through the actual numbers: the sex ratios recorded at every birth, tracked across every year, revealing the moment when China's demographic balance tipped into crisis.
              </p>
            </div>
          </FadeIn>

          {/* CHART: Trend */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[600px] my-12 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
              <NotebookFrame src="/notebooks/trend.html" title="National Sex Ratio Trend" />
            </div>
          </FadeIn>

          <FadeIn>
            <p>
              This line chart tracks China's national sex ratio at birth across 52 years, with horizontal reference lines marking the biological norm (102-107 boys per 100 girls).
            </p>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h4 className="text-lg font-bold text-slate-900">Key Observations:</h4>
              <ul className="list-disc pl-5 space-y-2 marker:text-rose-700">
                <li>
                  <strong>1970-1982: Biological baseline.</strong> SRB hovers at 106-107, within normal range.Despite social upheaval and early economic reforms, sex ratios remain naturally balanced.
                </li>
                <li>
                  <strong>1982-2008: Systematic escalation.</strong> Sharp, continuous climb from 108 (1982) to the peak of 121 (2004-2008). Acceleration notably begins around 1985, coinciding with the diffusion of ultrasound technology diffusion. At peak (121), approximately 54.7% of births are male vs. the natural 51.2%—translating to ~600,000 missing girls per year.
                </li>
                <li>
                  <strong>Policy annotations reveal correlations.</strong> 
                  <ul>
                    <li>
                      1.5-child policy launch & B-ultrasound widespread (1980s): SRB begins rising from 108 to 111
                    </li>
                    <li>
                       One-child policy fully implemented (1990s): Steepest climb period, reaching 114 by 1995, 118 by 2000
                    </li>
                    <li>
                      Two-child policy fully implemented (2016): Decline accelerates from 115 to 111
                    </li>
                    <li>
                      Three-child policy opened (2021): SRB drops to 108-111 range
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>2008-Present: The correction.</strong> Sustained decline from 121 (2008) to approximately 111 (2022). Improvement driven by: policy relaxation, stricter enforcement of sex determination bans, marriage squeeze becoming socially visible, and gradual cultural evolution. However, 111 still exceeds the biological norm—imbalance persists at a reduced level.
                </li>
                <li>
                  <strong>Why the reversal?</strong> Multiple factors converged:
                  <ul>
                    <li>
                      Reduced birth pressure: With two or three children allowed, each birth is no longer all-or-nothing
                    </li>
                    <li>
                      Stricter enforcement: Crackdowns on illegal sex determination became more serious, with actual penalties
                    </li>
                    <li>
                      Social awareness: The marriage squeeze became undeniable—reports of millions of unmarried men sparked concern
                    </li>
                    <li>
                      Cultural evolution: Rising education, urbanization, and women's labor force participation gradually eroded son preference (though incompletely)
                    </li>
                    <li>
                      Technology monitoring: Hospital ultrasound equipment is increasingly logged and tracked, making illegal use harder
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 2 --- */}
        <section id="chapter-2" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <span className="text-rose-700 font-mono text-sm uppercase tracking-wider font-bold block mb-2">
                Chapter 2
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Geography of Imbalance</h2>
              <h3 className="text-xl font-medium text-slate-500 italic mb-6">
                "Not All Regions Are Equal: Mapping the Crisis Across China's Provinces"
              </h3>
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
          </FadeIn>
        </section>

        {/* --- CHAPTER 2.1 --- */}
        <section id="chapter-2-1" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2.1 The Heat of Imbalance:: Seeing Patterns Across Time and Space
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

        {/* --- CHAPTER 2.2 --- */}
        <section id="chapter-2-2" className="w-full flex flex-col items-center">
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
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12"> {/* */}
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Observations by Frame:</h3> {/* */}

              <div className="space-y-10">
                {/* 1982 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">1982 - The calm before:</p> {/* */}
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Map appears predominantly light peach/pale orange—most provinces 105-109</li>
                    <li>Only slight elevation visible in Anhui, Henan, Jiangxi (109-110)</li>
                    <li>Geographic pattern not yet established</li>
                  </ul>
                </div>

                {/* 1990 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">1990 - Pattern crystallizes:</p> {/* */}
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>A distinct "crisis arc" emerges:</strong> Darkening visible from Shaanxi (northwest) through central provinces (Henan, Anhui, Hubei, Hunan) to the eastern coast (Jiangsu, Zhejiang, Fujian, Jiangxi) down to Guangdong
                    </li>
                    <li>This arc follows the traditional Han Chinese heartland</li>
                    <li>
                      <strong>Periphery stays light:</strong> Northeast (Liaoning, Jilin, Heilongjiang) shows only modest elevation; Far west (Tibet, Xinjiang, Qinghai) remains near-normal; Southwest (Yunnan, Guizhou) moderate
                    </li>
                  </ul>
                </div>

                {/* 2000-2005 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">2000-2005 - Maximum darkness:</p> {/* */}
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Central and eastern provinces turn deep red/purple</li>
                    <li><strong>Anhui and Jiangxi are nearly black (SRB ~128-130)</strong></li>
                    <li><strong>The Henan-Hubei-Hunan triangle</strong> forms a visible dark cluster</li>
                    <li>
                      <strong>Coastal wealthy provinces are also dark:</strong> Guangdong, Fujian, Zhejiang (120-125), despite economic development
                    </li>
                    <li><strong>Shaanxi remainsa dark anchor in the northwest</strong></li>
                  </ul>
                </div>

                {/* 2010-2020 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">2010-2020 - Gradual fade:</p> {/* */}
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Colors lighten across the board, but the <strong>relative pattern persists</strong></li>
                    <li>Anhui, Henan, Jiangxi remain darker orange (112-115) while Tibet, Xinjiang stay light blue (105-107)</li>
                    <li>Crisis receding, but geographic signature unchanged</li>
                  </ul>
                </div>
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
          </FadeIn>
        </section>

        {/* --- CHAPTER 3.1 --- */}
        <section id="chapter-3-1" className="w-full flex flex-col items-center">
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

                <p className="font-bold text-slate-900 mb-2">Lightest (Lowest Clan Density 0-0.5):</p> {/* */}
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Tibet, Xinjiang:</strong> Entirely different cultural systems (Tibetan Buddhism, Islam)</li> {/* */}
                  <li><strong>Northeast:</strong> Frontier region, settled relatively recently (post-1700s), weak clan structures</li> {/* */}
                  <li><strong>Qinghai, Gansu:</strong> Mixed ethnic areas</li> {/* */}
                  <li><strong>Yunnan, Guizhou:</strong> Ethnic minority regions with diverse kinship traditions</li> {/* */}
                </ul>
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

        {/* --- ANALYSIS: Key Clusters --- */}
          <FadeIn delay={0.3}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Clusters:</h3>

              <div className="space-y-10">
                {/* Cluster 1 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">Cluster 1: "Crisis Epicenter" (Upper-right-back corner)</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Location:</strong> High Z, High Y, High X</li>
                    <li><strong>Provinces:</strong> Zhejiang, Fujian, Jiangxi</li>
                    <li><strong>Sphere size/color:</strong> Medium (purple/magenta—GDP)</li>
                    <li><strong>Interpretation:</strong> Strongest traditional culture + severe sex selection + crushing bride prices relative to income</li>
                    <li>These provinces face the worst marriage market crisis relative to economic capability</li>
                  </ul>
                </div>

                {/* Cluster 2 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">Cluster 2: "Wealthy Traditional" (Mid-right-back)</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Location:</strong> Medium-high Z, Medium-high Y, Medium-high X</li>
                    <li><strong>Provinces:</strong> Hunan, Hubei, Anhui</li>
                    <li><strong>Sphere size/color:</strong> Large (yellow/orange—GDP)</li>
                    <li><strong>Interpretation:</strong> Traditional culture persisted through development $\rightarrow$ moderate sex selection $\rightarrow$ high bride prices (but affordable given wealth)</li>
                  </ul>
                </div>

                {/* Cluster 3 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">Cluster 3: "Balanced Periphery" (Lower-left-front corner)</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Location:</strong> Very low Z, Low Y, Low X</li>
                    <li><strong>Provinces:</strong> Tibet, Xinjiang, Qinghai</li>
                    <li><strong>Sphere size/color:</strong> Small (purple—GDP )</li>
                    <li><strong>Interpretation:</strong> Different cultural systems $\rightarrow$ no sex selection $\rightarrow$ balanced marriage markets $\rightarrow$ minimal bride prices</li>
                    <li>Avoided the crisis entirely, regardless of low economic development</li>
                  </ul>
                </div>

                {/* Cluster 4 */}
                <div>
                  <p className="font-bold text-slate-800 mb-2 text-lg">Cluster 4: "Frontier Han" (Front-left, moderate elevation)</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Location:</strong> Low Z, Low-medium Y, Low-medium X</li>
                    <li><strong>Provinces:</strong> Liaoning, Jilin, Heilongjiang (Northeast)</li>
                    <li><strong>Sphere size/color:</strong> Medium (light purple/blue—GDP)</li>
                    <li><strong>Interpretation:</strong> Weak clan structures despite Han ethnicity $\rightarrow$ minimal sex selection $\rightarrow$ moderate bride prices</li>
                  </ul>
                </div>
              </div>

              {/* Summary Insight Box */}
              <div className="border-l-4 border-rose-700 pl-4 bg-rose-50 p-6 rounded mt-12 text-slate-800">
                <p className="italic">
                  <strong>Critical Insight:</strong> This single visualization captures the entire causal story: traditional culture ($Z$) $\rightarrow$ sex selection ($Y$) $\rightarrow$ marriage crisis ($X$), with wealth (size/color) as enabler but not driver. The 3D spatial separation of clusters shows these aren't random variations—they're structurally distinct demographic regimes determined by kinship systems.
                </p>
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
  );
}