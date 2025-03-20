import {execSync} from 'child_process';
import {parseCLIArguments} from '../cli/utils';
import {buildDockerImage} from '../docker/build';
import {getBuildDockerImageParameters} from '../docker/parameters';
import {saveDockerImage} from '../docker/save';

// TODO: Remove and refactor this file
process.env['DOCKER_BUILD_TAG'] = 'luke-code-works/resume:latest';
process.env['DOCKER_BUILD_FILE'] = 'apps\\ng-apps-resume\\.docker\\dockerfile';

const cliArgs = parseCLIArguments();
const parameters = {
    ...getBuildDockerImageParameters(cliArgs),
};

execSync(`nx run @luke-code-works/ng-apps-resume:build:production`, {
    stdio: 'inherit',
});
buildDockerImage(parameters.dockerFile, parameters.dockerTag);
saveDockerImage('resume_latest.tar', parameters.dockerTag);
