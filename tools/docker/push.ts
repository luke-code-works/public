import {execSync} from 'child_process';

export function pushDockerImage(tag: string) {
    console.log('> docker image push');
    execSync(`docker image push "${tag}"`, {stdio: 'inherit'});
}
