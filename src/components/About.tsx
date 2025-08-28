'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Über <span className="text-blue-600">uns</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wir sind Imagefilme-Sauer, ein kreativer Partner für Unternehmen, die ihre Geschichte 
              durch beeindruckende visuelle Kommunikation erzählen möchten.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Mit jahrelanger Erfahrung in der Filmproduktion und einem tiefen Verständnis für 
              moderne Marketingstrategien schaffen wir Imagefilme, die nicht nur visuell beeindrucken, 
              sondern auch messbare Ergebnisse liefern.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700">Erfolgreich produzierte Imagefilme</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-700">Jahre Erfahrung in der Branche</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Unsere Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                Wir glauben daran, dass jedes Unternehmen eine einzigartige Geschichte hat, 
                die es wert ist, erzählt zu werden.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Kreative Konzeptentwicklung</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Professionelle Filmproduktion</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Strategische Markenkommunikation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
