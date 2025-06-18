export class TrustedTypeError extends Error {
    constructor(
        message?: string,
        readonly context?: unknown,
    ) {
        super(message);
        this.name = 'TrustedTypeError';
    }
}
