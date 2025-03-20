export type CLIArguments = Record<string, string | undefined>;

export function parseCLIArguments(): CLIArguments {
    const args = {};

    process.argv.slice(2).forEach((arg) => {
        const splits = arg.split('=');
        if (splits.length > 0) {
            const [key, value] = splits;
            args[key.replace(/^--/, '')] = value;
        } else {
            args[arg] = undefined;
        }
    });

    return args;
}

export function requireParameters<T>(args: Partial<T>): T {
    const missingArgs = Object.entries(args).filter(([, value]) => value == null);

    if (missingArgs.length > 0) {
        throw new Error(`Missing parameter(s) ${missingArgs.map(([key]) => key).join(', ')}!`);
    }

    return args as T;
}
