import {execSync} from 'child_process';

export function loginDockerRegistry(registry: string, username: string, password: string) {
    console.log('> docker registry login');
    execSync(`docker login --username="${username}" --password="${password}" "${registry}"`, {
        stdio: 'inherit',
    });
}

export function logoutDockerRegistry(registry: string) {
    console.log('> docker registry logout');
    execSync(`docker logout "${registry}"`, {stdio: 'inherit'});
}
