import { Metadata } from "next";
import Link from "next/link";
import TransportSection from "../components/TransportSection";
import ToDoCard from "../components/ToDoCard";
import HeaderSection from "../components/HeaderSection";
import { getCityByName } from "@/shared/infrastructure/city.repository";
import { notFound } from "next/navigation";
import FactItems from "../components/FactItems";

export const metadata: Metadata = {
  title: "Tilburg | City Guide",
  description:
    "Discover Tilburg - art, culture, festivals and the biggest funfair in the Benelux. Your complete guide to this creative Dutch city.",
};

export default function TilburgPage() {
const city = getCityByName("Tilburg"); // may throw
if (!city) notFound() // works in App Router

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeaderSection
            title={city.name} 
            subtitle={city.description}
        />

        {/* Quick Facts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Facts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <FactItems city={city} />
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Did You Know?</h2>
            <div className="space-y-4">
              <div className="p-6 bg-sky/10 border-l-4 border-sky rounded-r-xl">
                <p className="font-semibold mb-2">
                  Oldest Funfair in the Netherlands
                </p>
                <p className="text-foreground/80">
                  The first Tilburgse Kermis was organized way back in 1570!
                  Today, it&apos;s the largest funfair in the Benelux with 250+
                  attractions across 4.5 kilometers.
                </p>
              </div>
              <div className="p-6 bg-peach/10 border-l-4 border-peach rounded-r-xl">
                <p className="font-semibold mb-2">
                  King Willem II&apos;s Favorite City
                </p>
                <p className="text-foreground/80">
                  King Willem II loved Tilburg so much he built a palace here to
                  escape court life. He died in Tilburg in 1849, and his palace
                  still stands today!
                </p>
              </div>
              <div className="p-6 bg-coral/10 border-l-4 border-coral rounded-r-xl">
                <p className="font-semibold mb-2">The Wool Capital</p>
                <p className="text-foreground/80">
                  Tilburg was once known as the &quot;wool capital of the
                  Netherlands&quot; with 145 wool mills in 1881. The
                  TextielMuseum keeps this rich industrial heritage alive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Must-Visit Attractions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doloris */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Doloris&apos; Meta Maze
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    A mind-bending surrealist art installation. Walk through a
                    three-dimensional painting that challenges your perception
                    and stimulates all your senses.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Spoorzone</span>
                  </div>
                </div>
              </div>

              {/* De Pont */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">De Pont Museum</h3>
                  <p className="text-foreground/70 mb-4">
                    One of the best contemporary art museums in the Netherlands.
                    Housed in a former wool spinning mill with 800+ works from
                    80 different artists.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Wilhelminapark</span>
                  </div>
                </div>
              </div>

              {/* LocHal */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">LocHal Library</h3>
                  <p className="text-foreground/70 mb-4">
                    Award-winning library in a converted locomotive hall. Winner
                    of &quot;Best Building of the Year 2019&quot; and multiple
                    international architecture prizes.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Spoorzone</span>
                  </div>
                </div>
              </div>

              {/* Spoorpark */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Spoorpark</h3>
                  <p className="text-foreground/70 mb-4">
                    A citizen-initiated urban park built on former industrial
                    grounds. Perfect for picnics, camping, sports, and relaxing
                    in the heart of the city.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Central Tilburg</span>
                  </div>
                </div>
              </div>

              {/* TextielMuseum */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">TextielMuseum</h3>
                  <p className="text-foreground/70 mb-4">
                    Experience Tilburg&apos;s textile heritage with working
                    looms and modern design lab. Watch artisans create and
                    design your own textile products.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Goirkestraat</span>
                  </div>
                </div>
              </div>

              {/* La Trappe Abbey */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Koningshoeven Abbey
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Visit one of the few Trappist monasteries in the world. The
                    monks have been brewing La Trappe beer here since 1884.
                    Tours and tastings available!
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Berkel-Enschot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
                Things To Do
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <ToDoCard city={city}/>
            </div>
            </div>
        </section>

        {/* Practical Info */}
        <TransportSection city={city} />

        {/* Navigation to other pages */}
        <section className="py-12 px-4 bg-brown text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-4">Want to explore more?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/eindhoven"
                className="px-6 py-3 bg-white text-brown rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Discover Eindhoven
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-coral text-white rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}