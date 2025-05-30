export function LeadershipSection() {
  return (
    <section className="w-full py-20 bg-white flex flex-col justify-center items-center">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <div className="mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-[#0B1D26] mb-8 [font-family:var(--font-playfair)]">
            Leadership Structure
          </h2>
          <div className="prose text-[#0B1D26]/90">
            <p>
              Our flat leadership structure ensures efficient decision-making while maintaining robust governance:
            </p>
            <ul>
              <li><strong>Investment Committee:</strong> Oversees all capital allocation decisions</li>
              <li><strong>Advisory Board:</strong> Provides strategic guidance and industry expertise</li>
              <li><strong>Operations Team:</strong> Executes on investment strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}