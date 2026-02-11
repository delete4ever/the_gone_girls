import Link from 'next/link';
import FadeIn from '@/app/components/FadeIn';

export default function SummaryPage() {
  return (
    <div className="bg-stone-50">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto pb-24">
          <div className="prose prose-lg prose-slate max-w-3xl mx-auto prose-p:my-10">
          
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 leading-tight tracking-tight">
              A Family Story
            </h1>
            
            <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed space-y-8">
          
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
            <figure className="my-12 flex flex-col items-center">
              <div className="max-w-xl w-full mx-auto rounded-xl overflow-hidden shadow-sm border border-stone-200">
                <img
                  src="/images/slogan.jpg"
                  alt="Slogan on a wall in China"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="max-w-xl mx-auto mt-4 p-4 bg-white border-l-4 border-rose-700 text-sm text-slate-600 shadow-sm rounded-r-lg text-left">
                <strong className="block text-slate-900 mb-1">Propaganda from the Early 2000s</strong>
                This slogan, “Boys and girls are equally good — daughters are also carriers of the family line,” is a piece of social propaganda commonly painted on walls in China in the early 21st century. It reflects government efforts to challenge traditional son-preference culture by promoting the idea that girls are just as valuable as boys and can equally continue the family lineage. Such slogans were part of broader public messaging campaigns aimed at reshaping long-standing gender norms in rural and urban communities.
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed space-y-8">
              {/* From Family to Nation */}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">From Family to Nation</h2>
              <p>
                These are not unusual stories in China—they are utterly ordinary. Across millions of families over four decades, similar scenes played out: the desperate desire for a son, the secret ultrasound appointments, the quiet abortions when the fetus was female, the unequal distribution of family resources and affection based on a child's sex.
              </p>
              <p>
                My family's story is a single thread in a massive demographic tapestry. While my grandfather raged about the Yang family line potentially ending, hundreds of millions of other families were making similar calculations, taking similar actions. The collective result of these individual family dramas is one of the most severe demographic crises in modern history: <b>China's sex ratio at birth (SRB) imbalance and the disappearance of an estimated 30-40 million women who were never born</b>.
              </p>
              <p>
                The numbers are staggering. In nature, approximately 105 boys are born for every 100 girls—a slight biological constant that has held across virtually all human populations throughout history. But in China during the 2000s, the national sex ratio at birth reached 121 boys per 100 girls. In some provinces, it exceeded 130. For second and third children in families without sons, the ratios soared even higher—sometimes reaching 150 or 200.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-lg prose-slate text-slate-700 leading-relaxed space-y-8">
              {/* Research Motivation */}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Research Motivation</h2>
              <p>
                This project is both profoundly personal and rigorously analytical. I want to understand not just that China has a sex ratio problem—that much is well documented—but <b>where, when, why, and how this crisis emerged and evolved</b>.
              </p>
              <p>
                The data tells stories that individual families cannot see. While my grandfather worried about the Yang family line in one small city, what was happening across China's 31 provinces? Were all regions equally affected, or did the crisis concentrate in certain areas? If so, why? What role did economics play versus culture? How did families behave when faced with multiple daughters—did they accept it, or did they select the sex of subsequent children until achieving a son? And what are the consequences now that those cohorts with skewed sex ratios have reached adulthood?
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
                    <strong>Behavioral patterns:</strong> How did son preference manifest across birth orders? Did families with daughters continue selecting until achieving a son?
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
    </div>
  );
}