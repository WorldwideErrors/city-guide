import { Metadata } from "next";
import Link from "next/link";
import TransportSection from "../components/TransportSection";
import ToDoCard from "../components/ToDoCard";
import HeaderSection from "../components/HeaderSection";
import { getCityByName } from "@/shared/domain/city.repository";
import { notFound } from "next/navigation";
import FactItems from "../components/FactItems";

export const metadata: Metadata = {
  title: "Eindhoven | City Guide",
  description:
    "Discover Eindhoven - design, innovation, and nightlife in the Lichtstad. Your guide to the Netherlands' brightest city.",
};

export default function EindhovenPage() {
const city = getCityByName("Eindhoven"); // may throw
if (!city) notFound() // works in App Router

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeaderSection
            title="Eindhoven" 
            subtitle="The Lichtstad - Design capital of the Netherlands where
            innovation illuminates the future"
        />

        {/* Quick Facts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Facts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <FactItems city={city}/>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Did You Know?</h2>
            <div className="space-y-4">
              <div className="p-6 bg-coral/10 border-l-4 border-coral rounded-r-xl">
                <p className="font-semibold mb-2">Double Lichtstad</p>
                <p className="text-foreground/80">
                  Eindhoven earned &quot;Lichtstad&quot; (Light City) from
                  matches first! Match factories started in 1870, 21 years
                  before Philips began making light bulbs in 1891.
                </p>
              </div>
              <div className="p-6 bg-brown/10 border-l-4 border-brown rounded-r-xl">
                <p className="font-semibold mb-2">
                  Longest Pub Street in Benelux
                </p>
                <p className="text-foreground/80">
                  Stratumseind has over 50 bars, cafés, and clubs in a row,
                  making it officially the longest continuous pub street in the
                  Benelux. Party central!
                </p>
              </div>
              <div className="p-6 bg-rose/10 border-l-4 border-rose rounded-r-xl">
                <p className="font-semibold mb-2">Design Capital</p>
                <p className="text-foreground/80">
                  Dutch Design Week attracts 350,000+ visitors annually.
                  Eindhoven graduates have designed everything from Tesla cars
                  to Olympic stadiums.
                </p>
              </div>
              <div className="p-6 bg-peach/10 border-l-4 border-peach rounded-r-xl">
                <p className="font-semibold mb-2">Flying Saucer Building</p>
                <p className="text-foreground/80">
                  The Evoluon looks like a UFO! Built by Philips in 1966 for
                  their 75th anniversary, it was a science museum and is now a
                  conference center.
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
              {/* Philips Museum */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Philips Museum</h3>
                  <p className="text-foreground/70 mb-4">
                    Discover how a small light bulb factory became a global
                    electronics giant. Located in the original 1891 building
                    where it all began.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 City Center</span>
                  </div>
                </div>
              </div>

              {/* Van Abbemuseum */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Van Abbemuseum</h3>
                  <p className="text-foreground/70 mb-4">
                    One of Europe&apos;s leading contemporary art museums with
                    3,600+ works including Picasso, Kandinsky, and Mondriaan.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 Bilderdijklaan</span>
                  </div>
                </div>
              </div>

              {/* Strijp-S */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Strijp-S Design District
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Former Philips industrial complex transformed into a
                    creative hotspot. Design shops, restaurants, street art, and
                    the Trudo Toren &quot;vertical forest&quot;.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 Strijp-S</span>
                  </div>
                </div>
              </div>

              {/* Evoluon */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Evoluon</h3>
                  <p className="text-foreground/70 mb-4">
                    Iconic flying-saucer building from 1966. Now houses the
                    RetroFuture exhibition and Brasserie Next restaurant with
                    futuristic vibes.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 Noord</span>
                  </div>
                </div>
              </div>

              {/* PSV Stadium */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Philips Stadion</h3>
                  <p className="text-foreground/70 mb-4">
                    Home of PSV Eindhoven since 1913. Take a stadium tour to see
                    the pitch, dressing rooms, and trophy cabinet of this
                    legendary club.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 Frederiklaan</span>
                  </div>
                </div>
              </div>

              {/* St. Catherine's Church */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Sint-Catharinakerk</h3>
                  <p className="text-foreground/70 mb-4">
                    Stunning neo-Gothic church from 1867 designed by Pierre
                    Cuypers (same architect as Rijksmuseum). Two 73-meter towers
                    dominate the skyline.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 City Center</span>
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

        {/* Food & Drink */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Food & Drink</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-bold mb-2">Radio Royaal</h3>
                <p className="text-sm text-foreground/70">
                  Dine in a former Philips machine room at Strijp-S. Industrial
                  atmosphere with excellent modern cuisine.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-bold mb-2">De Kazerne</h3>
                <p className="text-sm text-foreground/70">
                  Art, design, hotel, and restaurant combined. Creative Dutch
                  cuisine in a stunning converted army barracks.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-bold mb-2">Lucifer Café</h3>
                <p className="text-sm text-foreground/70">
                  In De Bergen district. Great coffee and fresh pastries in a
                  cozy setting that honors Eindhoven&apos;s match-making
                  history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <TransportSection city={city} />

        {/* Navigation to other pages */}
        <section className="py-12 px-4 bg-coral text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-4">Want to explore more?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tilburg"
                className="px-6 py-3 bg-white text-coral rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Discover Tilburg
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-brown text-white rounded-lg font-semibold hover:scale-105 transition-transform"
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