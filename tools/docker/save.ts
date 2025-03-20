import {execSync} from 'child_process';

export function saveDockerImage(file: string, tag: string) {
    console.log('> docker image save');

    execSync(`docker image save --output="${file}" "${tag}"`, {
        stdio: 'inherit',
    });
}
