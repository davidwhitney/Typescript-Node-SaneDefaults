class Greeter {
    private greeting: string;
    public constructor(message: string) {
        this.greeting = message;
    }
    public greet(): string {
        return "Heya, " + this.greeting;
    }
}

export { Greeter };