import FadeIn from '@/app/components/FadeIn';

export default function SummaryPage() {
  return (
    <div className="bg-stone-50">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto pb-24">
        
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight">Methodology</h1>
            
            <div className="space-y-12 text-slate-700 leading-relaxed">
              
              {/* Research Design */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Research Design</h2>
                <p className="mb-4">
                  This project employs an <strong>exploratory visual analytics approach</strong> that integrates quantitative demographic data with geospatial and temporal visualization techniques. Rather than testing specific hypotheses, the goal is to uncover patterns, relationships, and narratives within complex demographic data through systematic visual exploration.
                </p>
                <p className="mb-4">The methodology follows three stages:</p>
                <ul className="list-decimal pl-5 space-y-2 marker:text-rose-700 marker:font-bold">
                  <li>Data acquisition and preparation from official statistical sources.</li>
                  <li>Visual encoding and interactive design to reveal spatial-temporal patterns.</li>
                  <li>Interpretive analysis connecting visualizations to scholarly literature on son preference, fertility policy, and demographic change in China.</li>
                </ul>
              </section>

              {/* Data Sources */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Sources and Acquisition</h2>
                
                <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-8">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-stone-100 text-rose-700 text-xs flex items-center justify-center">1</span>
                      China National Bureau of Statistics (NBS)
                    </h3>
                    <ul className="list-disc pl-9 space-y-1 text-sm marker:text-rose-700">
                      <li>Decennial census data: 1982, 1990, 2000, 2010, 2020</li>
                      <li>1% National Population Sample Surveys: 1987, 1995, 2005, 2015</li>
                      <li>Annual provincial statistical yearbooks (for GDP data)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                       <span className="w-6 h-6 rounded-full bg-stone-100 text-rose-700 text-xs flex items-center justify-center">2</span>
                       UNFPA Technical Reports
                    </h3>
                    <div className="pl-9">
                      <p className="text-sm mb-1 italic">"Sex Ratio at Birth in China: Recent Trends and Regional Variations"</p>
                      <p className="text-sm">Synthesized NBS data providing standardized provincial-level SRB estimates across consistent geographic boundaries.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                       <span className="w-6 h-6 rounded-full bg-stone-100 text-rose-700 text-xs flex items-center justify-center">3</span>
                       Academic Research & Librarian Data
                    </h3>
                    <p className="text-sm pl-9">
                      Following Pan et al. (2019), I measured <strong>clan density</strong> as the number of genealogies per 10,000 people, using lineage records from the Shanghai Library's Chinese Genealogy Knowledge Service Platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                       <span className="w-6 h-6 rounded-full bg-stone-100 text-rose-700 text-xs flex items-center justify-center">4</span>
                       Contemporary Survey Data
                    </h3>
                    <p className="text-sm pl-9">
                      Bride price (彩礼) data from Tencent's Guyu Data Studio (谷雨数据工作室) 2020 provincial survey.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Cleaning */}
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Data Cleaning and Standardization</h3>
                <p className="mb-4">
                  Official statistics were published primarily as formatted tables in PDF yearbooks rather than machine-readable datasets, requiring manual acquisition. Standardization steps included:
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-rose-700">
                  <li>
                    <strong>Geographic boundary harmonization:</strong> Historical data were adjusted to match current boundaries (e.g., separating Chongqing from Sichuan after 1997) using UNFPA standards.
                  </li>
                  <li>
                    <strong>Missing data handling:</strong> Missing province-year combinations (particularly Tibet/Xinjiang in early years) were left as missing rather than imputed.
                  </li>
                  <li>
                    <strong>Regional classification:</strong> Provinces were grouped into six major regions (Northeast, North, East, Central-South, Southwest, Northwest).
                  </li>
                </ul>
              </section>

              {/* Tools */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Processing and Visualization Tools</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Python Column */}
                  <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm shadow-md">
                    <div className="text-rose-400 font-bold mb-4 uppercase tracking-wider"># Data Processing</div>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-white block mb-1">pandas</strong>
                        Merging datasets, handling missing values, calculating regional averages.
                      </div>
                      <div>
                        <strong className="text-white block mb-1">numpy</strong>
                        Numerical operations and statistical calculations.
                      </div>
                    </div>
                  </div>

                  {/* Plotly Column */}
                  <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm shadow-md">
                    <div className="text-rose-400 font-bold mb-4 uppercase tracking-wider"># Visualization</div>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-white block mb-1">plotly.express</strong>
                        Rapid prototyping and standard charts.
                      </div>
                      <div>
                        <strong className="text-white block mb-1">plotly.graph_objects</strong>
                        Fine-grained control for complex mapbox layers and 3D scatter plots.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-2"><strong>Why Plotly?</strong> Explicitly chosen for:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm marker:text-rose-700">
                    <li><strong>Interactivity:</strong> Hover data, zoom, and layer toggles.</li>
                    <li><strong>Animation:</strong> Smooth temporal transitions for choropleth maps.</li>
                    <li><strong>3D Support:</strong> Complex multi-dimensional scatter plots.</li>
                    <li><strong>Web-friendly:</strong> Easy embedding for web narratives.</li>
                  </ul>
                </div>
              </section>

              {/* Notebook Link */}
              <section className="bg-stone-100 border border-stone-200 rounded-xl p-8 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">View the Code</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  All Python code and data collection logic are contained in the Google Colab Jupyter notebook.
                </p>
                <a 
                  href="https://colab.research.google.com/drive/1RHxaoG4YtQ7RaUCBELLOGpr35a6zWpRE?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-rose-700 text-white font-semibold rounded-lg hover:bg-rose-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Open Google Colab Notebook &rarr;
                </a>
              </section>

            </div>
          </FadeIn>
        
        </div>
      </div>
    </div>
  );
}