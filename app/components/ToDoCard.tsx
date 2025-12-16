import { City } from "@/shared/domain/city";

type ToDoProps = {
    city: City;
};

export default function ToDoCard({ city }: ToDoProps) {
    return (
        <>
        {city.todos.map((todos, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4">{todos.title}</h3>
            <p className="text-foreground/80 mb-4">
                {todos.description}
            </p>
            <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                {todos.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
                ))}
            </ul>
            </div>
        ))}
        </>
    );
}

