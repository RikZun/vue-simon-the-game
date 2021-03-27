export { wait, randint }

function wait(ms: number): Promise<Function> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function randint(min: number, max: number): number {
    if (min > max || min < 0) return 0
    return Math.floor(Math.random() * (max - min) + min)
}