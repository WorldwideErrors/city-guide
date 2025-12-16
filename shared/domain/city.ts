export interface City {
    name: string
    description: string
    facts: { label: string; value: string }[]
    todos: { title: string; description: string; activities: string[] }[]
    transport: { type: string; icon: string; description: string }[]
}