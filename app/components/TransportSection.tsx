import { City } from "@/shared/domain/city";

type TransportSectionProps = {
  city: City;
};

export default function TransportSection({ city }: TransportSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Getting to {city.name}
        </h2>

        <div className="space-y-6">
          {city.transport.map((transport, index) => (
          <div key={index}> 
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">{transport.icon}</span>
              <span className="ml-2 text-lg">{transport.type}</span>
            </h3>
            <p className="text-foreground/80 ml-11">
              {transport.description}
            </p>
            
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
