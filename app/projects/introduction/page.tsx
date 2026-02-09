import Link from 'next/link';
import FadeIn from '@/app/components/FadeIn';

export default function SummaryPage() {
  return (
    <div className="bg-stone-50">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto pb-24">
          
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 leading-tight tracking-tight">
              A Family Story
            </h1>
            
            <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed">
              
              <p>
                It was 2004, and my uncle's wife was pregnant with their first child. In a small clinic in our hometown, she underwent an ultrasound examination—a routine medical procedure that, in China, carries an illegal second purpose. A doctor they knew whispered the result: a girl.
              </p>

              <p>
                When my grandfather heard the news, he stormed out of the house in rage, slamming the door behind him. "Our Yang family line will end!" he shouted. The irony of his fury became apparent months later when my aunt gave birth to a healthy baby boy—the ultrasound had been wrong. From that moment on, this cousin became the golden child. Every Lunar New Year, while other grandchildren received modest red envelopes, he received the most expensive gifts, the loudest praise, the clearest affection.
              </p>

              <p>
                Six years later, in 2010, my other uncle's wife gave birth to a daughter. The family was polite but visibly disappointed. For years, they tried for a second child. Finally, just two years ago, she gave birth to a son. Overnight, the family's attention pivoted entirely to this baby boy. Their elder daughter, once the center of attention, gradually grew quieter, more withdrawn.
              </p>
            </div>
          </FadeIn>

          {/* --- IMAGE INSERTION --- */}
          <FadeIn delay={0.2}>
            <figure className="my-12">
              <div className="rounded-xl overflow-hidden shadow-sm border border-stone-200">
                <img 
                  src="/images/slogan.jpg" 
                  alt="Slogan on a wall in China" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-4 p-4 bg-white border-l-4 border-rose-700 text-sm text-slate-600 shadow-sm rounded-r-lg">
                <strong className="block text-slate-900 mb-1">Propaganda from the Early 2000s</strong>
                This slogan, “Boys and girls are equally good — daughters are also carriers of the family line,” reflects government efforts to challenge traditional son-preference.
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed">
              {/* From Family to Nation */}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">From Family to Nation</h2>
              <p>
                These are not unusual stories in China—they are utterly ordinary. Across millions of families over four decades, similar scenes played out: the desperate desire for a son, the secret ultrasound appointments, and the unequal distribution of family resources.
              </p>
              <p>
                The collective result of these individual family dramas is one of the most severe demographic crises in modern history: China's sex ratio at birth (SRB) imbalance and the disappearance of an estimated 30-40 million women who were never born.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed">
              {/* Research Motivation */}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Research Motivation</h2>
              <p>
                This project is both profoundly personal and rigorously analytical. I want to understand not just that China has a sex ratio problem—that much is well documented—but where, when, why, and how this crisis emerged and evolved.
              </p>
              
              {/* Core Research Questions */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm mt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Core Research Questions:</h3>
                <ul className="list-disc pl-5 space-y-4 marker:text-rose-700">
                  <li>
                    <strong>Temporal dynamics:</strong> When did the sex ratio imbalance emerge, peak, and begin declining? How did it respond to significant policy changes?
                  </li>
                  <li>
                    <strong>Geographic variation:</strong> Which provinces experienced the most severe imbalances? Why was the crisis concentrated in certain areas?
                  </li>
                  <li>
                    <strong>Economic vs. cultural drivers:</strong> Is it poverty, wealth, or something deeper rooted in kinship structures?
                  </li>
                  <li>
                    <strong>Behavioral patterns:</strong> Did families with daughters continue selecting until achieving a son?
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Call to Action */}
          <FadeIn delay={0.2}>
            <div className="mt-16 pt-8 border-t border-stone-200 text-center">
              <Link 
                href="methodology" 
                className="inline-flex items-center px-8 py-4 bg-rose-700 text-white font-semibold rounded-full hover:bg-rose-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Methodology &rarr;
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}