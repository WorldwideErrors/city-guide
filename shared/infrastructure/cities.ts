import { City } from "../domain/city";

export const cities: City[] = [
    {
        name: "Eindhoven",
        description: "The Lichtstad - Design capital of the Netherlands where innovation illuminates the future",
        facts: [
            { label: "Population", value: "235,000" },
            { label: "Area", value: "88.87 km²" },
        ],
        todos: [
            {
                title: "Design Walking Tour",
                description: "Walk through Eindhoven's transformation from industrial city to design capital. Spot street art, including the famous Monty Python \"Silly Walks\" tunnel!",
                activities: [
                    "Start at Philips Museum (original factory)",
                    "Explore Strijp-S creative district",
                    "Visit Van Abbemuseum",
                    "End at Stratumseind for drinks"
                ]
            },
            {
            title: "Nightlife Experience",
            description: "Experience Stratumseind - the longest pub street in the Benelux with 50+ bars, clubs, and restaurants all in a row.",
            activities: [
                "Bar hop along Stratumseind",
                "Try local brewery Stadsbrouwerij",
                "Dance at Stratum club district",
                "Live music at various venues"
            ]
        }],
        transport: [
            { icon: "🚂", type: "By Train", description: "Eindhoven Centraal connects to all major Dutch cities. From Amsterdam: 1h 15min. From Rotterdam: 1h 10min. From Tilburg: just 20 minutes!" },
            { icon: "✈️", type: "By Plane", description: "Eindhoven Airport is the 2nd largest in the Netherlands, serving 1.6 million passengers yearly. Budget airlines like Ryanair, Transavia, and Wizz Air fly here. Just 15 minutes from city center!"},
            { icon: "🚌", type: "Local Transport", description: "Excellent public transport network. But cycling is king here - Eindhoven has dedicated red bike lanes throughout the city. Bike rentals at the station."}
        ]
    },
    {
        name: "Tilburg",
        description: "The creative heart of Noord-Brabant, where contemporary art meets the warm, friendly atmosphere of Brabant",
        facts: [
            { label: "Residents", value: "220,000" },
            { label: "Students (highest in NL)", value: "18%" },
            { label: "Kermis Visitors", value: "1.5M+"},
            { label: "Carnival Name", value: "Kruikenstad" }
        ],
        todos: [
            {
                title: "City Walking Tour",
                description: "Explore Tilburg's monuments and history on foot. See King Willem II's statue, the Kruikezeiker (carnival symbol), and historic textile buildings.",
                activities: [
                    "Start at Willem II monument (Heuvel)",
                    "Visit the Kermis monument at NS-Plein",
                    "Walk through the historic Dwaalgebied",
                    "End at Piushaven waterfront"
                ]
            },
            {
                title: "Cycling Route",
                description: "Bike through Tilburg's green spaces and surrounding nature. The city has excellent cycling infrastructure with dedicated red bike lanes everywhere.",
                activities: [
                    "Cycle to Loonse & Drunense Dunes (Brabant Sahara)",
                    "Explore Oisterwijk Fens nature reserve",
                    "Visit nearby Efteling theme park (15 min)",
                    "Rent bikes at central station"
                ]
            },
            {
                title: "Nightlife & Culture",
                description: "Tilburg's student population ensures a lively cultural scene with concerts, theater, and vibrant bars.",
                activities: [
                    "013 - Brabant's premier music venue",
                    "Schouwburg & Concertzaal - classical concerts",
                    "Heuvel & Piusplein - terrace hopping",
                    "CINECITTA - cultural cinema since 1983"
                ]
            },
            {
                title: "Annual Events",
                description: "Time your visit with Tilburg's world-famous festivals for an unforgettable experience.",
                activities: [
                    "Tilburgse Kermis (July) - Biggest funfair in Benelux",
                    "Roze Maandag - Pink Monday LGBT celebration",
                    "Carnaval (February/March) - Kruikenstad festivities",
                    "Festival Mundial - World music festival"
                ]
            }
        ],
        transport: [
            { icon: "🚂", type: "By Train", description: "Tilburg Centraal is well-connected to major Dutch cities. From Amsterdam: 1.5 hours with a change at Utrecht. From Rotterdam: 1 hour. From Eindhoven: 20 minutes."},
            { icon: "✈️", type: "By Plane", description: "Nearest airports are Eindhoven Airport (30 min) and Amsterdam Schiphol (1.5 hours). Brussels Airport is also nearby (1.5 hours)."},
            { icon: "🚌", type: "Local Transport", description: "City buses connect all neighborhoods. The center is walkable and bike-friendly. Bike rentals available at the station."}
        ]
    }
]