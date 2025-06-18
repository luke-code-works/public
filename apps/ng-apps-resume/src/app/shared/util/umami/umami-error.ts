export class UmamiError extends Error {
    constructor(
        message?: string,
        readonly context?: unknown,
    ) {
        super(message);
        this.name = 'UmamiError';
    }
}
