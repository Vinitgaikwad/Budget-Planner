export function consoleError(error: any) {
    if (process.env.NODE_ENV === "development") {
        console.log(error);
    }
}