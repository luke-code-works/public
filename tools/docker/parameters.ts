import {CLIArguments, requireParameters} from './../cli/utils';

export function getBuildDockerImageParameters(cliArguments: CLIArguments) {
    return requireParameters({
        dockerTag: cliArguments['docker-build-tag'] ?? process.env.DOCKER_BUILD_TAG,
        dockerFile: cliArguments['docker-build-file'] ?? process.env.DOCKER_BUILD_FILE,
    });
}

export function getPushDockerImageParameters(cliArguments: CLIArguments) {
    return requireParameters({
        dockerTag: cliArguments['docker-push-tag'] ?? process.env.DOCKER_PUSH_TAG,
    });
}

export function getDockerRegistryParameters(cliArguments: CLIArguments) {
    return requireParameters({
        dockerRegistry: cliArguments['docker-registry'] ?? process.env.DOCKER_REGISTRY,
        dockerRegistryUsername: cliArguments['docker-registry-username'] ?? process.env.DOCKER_REGISTRY_USERNAME,
        dockerRegistryPassword: cliArguments['docker-registry-password'] ?? process.env.DOCKER_REGISTRY_PASSWORD,
    });
}
