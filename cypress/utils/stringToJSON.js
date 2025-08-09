export function safeParse(data) {
    if (typeof data === "string") {
        try {
            return JSON.parse(data);
        } catch {
            throw new Error("Invalid JSON format");
        }
    }
    return data;
}
