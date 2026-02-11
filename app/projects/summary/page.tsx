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
                This visual journey through four decades of data has revealed:
              </p>
            </div>
          </FadeIn>

          {/* --- SECTION 1: KEY LESSONS --- */}
          <FadeIn delay={0.2}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 mb-20">
              <ol className="space-y-6 list-none pl-0">
                {[
                  "The crisis was not uniform but concentrated in specific regions—the traditional Han Chinese heartland of central and eastern China",
                  "The crisis was not driven by poverty but emerged most severely in regions with both traditional son preference AND economic capability to access sex-selective technology",
                  "The cultural foundation—measured through clan density—predicts which regions experienced severe imbalances better than economics or education alone",
                  "The behavioral pattern—escalating sex selection across birth orders—reveals that families seek at least one son, not exclusively sons",
                  "The recent decline is real, but the geographic pattern persists, suggesting cultural change is slow even as policy and technology evolve"
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* --- SECTION 2: ENDURING CONSEQUENCES --- */}
          <FadeIn delay={0.4}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto mb-20">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-6">The Enduring Consequences</h3>
                <p className="mb-10 text-slate-600 leading-relaxed">China now lives with the demographic legacy:</p>
                
            
                <ul className="space-y-10 list-none pl-0">
                  {[
                    { 
                      label: 'Approximately 30-40 million "surplus men"', 
                      desc: "in cohorts born 1985-2010, creating a severe marriage squeeze" 
                    },
                    { 
                      label: "Rising bride prices", 
                      desc: "as scarce women command higher marriage payments, particularly in rural areas" 
                    },
                    { 
                      label: "Cross-border marriage migration", 
                      desc: "as Chinese men seek brides from Vietnam, Myanmar, Laos—sometimes through trafficking" 
                    },
                    { 
                      label: "Delayed and foregone marriage", 
                      desc: "as millions of men, inferior and rural, face permanent bachelorhood" 
                    },
                    { 
                      label: "Social stability concerns", 
                      desc: 'around large populations of unmarried men (the "bare branches" phenomenon)' 
                    }
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col border-l-4 border-rose-100 pl-5 hover:border-rose-300 transition-colors">                  
                      <strong className="text-slate-900 text-xl mb-1 leading-tight tracking-tight">
                        {item.label}
                      </strong>
                      <span className="text-slate-700 leading-relaxed text-lg">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* --- SECTION 3: POLICY IMPLICATIONS --- */}
          <FadeIn delay={0.6}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto mb-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Policy Implications</h3>
              <p className="mb-8">China's policy reversals—from One-Child to Two-Child to Three-Child—show recognition of the crisis. But:</p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-slate-50 p-6 rounded-lg border-t-4 border-slate-400">
                  <p className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Policy alone didn't create it:</p>
                  <ul className="text-sm space-y-2 pl-4 list-disc">
                    <li>Required culture (son preference) + policy (birth limits) + technology (ultrasound)</li>
                    <li>Regions without strong son preference (Tibet, Northeast) didn't develop severe imbalances despite the same policy</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-t-4 border-slate-800">
                  <p className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Policy alone won't solve it:</p>
                  <ul className="text-sm space-y-2 pl-4 list-disc">
                    <li>Must address cultural foundations: inheritance laws, elder care systems, ritual practices</li>
                    <li>Women's empowerment: economic independence</li>
                    <li>Legal enforcement: crackdowns on illegal sex determination</li>
                    <li>Social security: public pensions reducing dependence on sons</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-rose-700 pl-6 italic bg-rose-50 p-6 rounded text-slate-800">
                <p className="font-bold mb-2">The bride price inflation is a symptom, not a disease:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Capping 彩礼 doesn't create more brides</li>
                  <li>Competition shifts to other dimensions (housing, education, appearance)</li>
                  <li>The only solution is time—waiting for distorted cohorts to age out</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* --- SECTION 4: FINAL THOUGHT --- */}
          <FadeIn delay={0.8}>
            <div className="prose prose-lg prose-slate max-w-3xl mx-auto pb-24 text-slate-800 leading-relaxed border-t border-slate-200 pt-12">
              <div className="prose prose-lg prose-slate max-w-3xl mx-auto prose-p:my-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Final Thought</h3>
              <p>
                This project began with a family story—my grandfather's rage, my cousin's silence. Through data visualization, I've shown how that personal story connects to national patterns, how individual families' decisions aggregate into demographic catastrophe, and how the consequences of sex selection persist across decades.
              </p>
              <p>
                But ultimately, this isn't just about data—it's about the millions of daughters who were never born, the millions of sons who can't find wives, the millions of families living with the consequences of prioritizing one sex over the other.
              </p>
              <p className="font-medium text-slate-900">
                I hope that visualizing this crisis—making visible the invisible forces of culture, economics, and demographics—can help ensure it never happens again, in China or elsewhere. Because the numbers tell stories, and those stories matter.
              </p>
            </div>
            </div>
          </FadeIn>
        </div>

          </div>
    </div>
  );
}