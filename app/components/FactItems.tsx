import { City } from "@/shared/domain/city";

type FactProp = {
    city: City
};

export default function FactItems({city}: FactProp) {
    return (
        <>
        {city.facts.map((fact, index) => (
        <div key={index} className="text-center p-6 bg-background rounded-xl">
            <div className="text-2xl font-bold text-sky">{fact.value}</div>
            <div className="text-sm text-foreground/70">{fact.label} </div>
        </div>
        ))}
        </>
    );
}