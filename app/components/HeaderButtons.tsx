import Link from "next/link";

export default function HeaderButtons() {
    return(
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
            href="/tilburg"
            className="px-8 py-4 bg-white text-brown rounded-xl font-semibold hover:scale-105 transition-transform shadow-xl"
            >
            Explore Tilburg
            </Link>
            <Link
            href="/eindhoven"
            className="px-8 py-4 bg-coral text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-xl"
            >
            Explore Eindhoven
            </Link>
        </div>
    );
}