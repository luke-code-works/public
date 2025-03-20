import {execSync} from 'child_process';

export function buildDockerImage(file: string, tag: string, progress: 'auto' | 'plain' = 'auto') {
    console.log('> docker image build');

    execSync(`docker image build --file="${file}" --tag="${tag}" --progress="${progress}"  --no-cache .`, {
        stdio: 'inherit',
    });
}
