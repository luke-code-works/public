export class TranslationNotFoundError extends Error {
    constructor(
        message?: string,
        readonly context?: unknown,
    ) {
        super(message);
        this.name = 'TranslationNotFoundError';
    }
}
