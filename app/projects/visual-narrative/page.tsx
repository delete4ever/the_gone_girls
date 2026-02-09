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
                When my grandfather feared that "the Yang family line would end" with the birth of a granddaughter, he expressed a concern shared by millions of Chinese families nationwide. But his individual anxiety, when multiplied across an entire nation, created something unprecedented in human history.
              </p>
              <p>
                This visualization maps how that transformation happened—not through abstract policy analysis, but through the actual numbers: the sex ratios recorded at every birth.
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
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h4 className="text-lg font-bold text-slate-900">Key Observations:</h4>
              <ul className="list-disc pl-5 space-y-2 marker:text-rose-700">
                <li>
                  <strong>1982-2008: Systematic escalation.</strong> Sharp, continuous climb from 108 to the peak of 121. Acceleration notably begins around 1985.
                </li>
                <li>
                  <strong>Policy annotations reveal correlations.</strong> The One-Child Policy implementation coincided with the steepest climb, reaching 118 by 2000.
                </li>
                <li>
                  <strong>2008-Present: The correction.</strong> Sustained decline from 121 to approximately 111, though still exceeding the biological norm.
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
              <p>
                The data reveal a striking truth: China's sex ratio crisis was never nationally uniform. Instead, it concentrated in specific geographic regions while largely sparing others.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 2.1 --- */}
        <section id="chapter-2-1" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2.1 The Heat of Imbalance
              </h2>
              <p>
                A heatmap matrix with provinces as rows and census years as columns. Darkest colors (deep red) indicate ratios of 130-135.
              </p>
            </div>
          </FadeIn>

          {/* CHART: Heatmap */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[750px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/heatmap.html" title="Provincial Heatmap" />
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
        <section id="chapter-2-2" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2.2 The Spatial Wave
              </h2>
              <p>
                An animated choropleth map of China with provinces colored by SRB. Watch how the "crisis arc" emerges from the central heartland.
              </p>
            </div>
          </FadeIn>

          {/* CHART: Animated */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[650px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/animated.html" title="Animated Map" />
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 2.3 --- */}
        <section id="chapter-2-3" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2.3 Regional Rankings
              </h2>
              <p>
                Grouped bar chart showing six regions' average SRB across seven census points.
              </p>
            </div>
          </FadeIn>

          {/* CHART: Average */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[600px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/average.html" title="Regional Averages" />
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
              <p>
                Why didn't economic development—rising education, urbanization, women's labor force participation—eliminate these traditional preferences as modernization theory predicts?
              </p>
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 3.1 --- */}
        <section id="chapter-3-1" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3.1 The Wealth Paradox
              </h2>
              <p>
                Wealthy provinces like Jiangsu and Zhejiang show surprisingly high imbalance ratios, inverting modernization theory.
              </p>
            </div>
          </FadeIn>

          {/* CHART: GDP */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[600px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/gdp.html" title="GDP Per Capita Map" />
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
                Comparing Sex Ratio (Map 1), Clan Density (Map 2), and Bride Prices (Map 3).
              </p>
            </div>
          </FadeIn>

          {/* CHART: Compare */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-4xl mx-auto h-[1850px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/compare.html" title="Comparison Maps" />
            </div>
          </FadeIn>
        </section>

        {/* --- CHAPTER 3.3 --- */}
        <section id="chapter-3-3" className="w-full flex flex-col items-center">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3.3 The Multidimensional Reality
              </h2>
              <p>
                A 3D scatter plot combining Bride Price (X), Sex Ratio (Y), Clan Density (Z), and GDP (Size).
              </p>
            </div>
          </FadeIn>

          {/* CHART: Scatter */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[700px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/scatter.html" title="Multidimensional Scatter Plot" />
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
              <p>
                The "stopping rule": Families often continue having children until they have a son. This behavior becomes visible when we break down sex ratios by birth order.
              </p>
            </div>
          </FadeIn>

          {/* CHART: Birth Order */}
          <FadeIn delay={0.2}>
            <div className="w-full max-w-7xl mx-auto h-[700px] my-10 border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
               <NotebookFrame src="/notebooks/birth_order.html" title="Birth Order Analysis" />
            </div>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}