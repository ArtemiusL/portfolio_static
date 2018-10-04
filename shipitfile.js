/* eslint-disable */
module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  const shipitSyncingSourceFolder = './shipit-syncing-source';
  const deploymentFolder = '/var/www/fantasy-website/cs';
  const releasesFolder = `${deploymentFolder}/releases`;
  const sshKeyPath = '~/.ssh/id_rsa.pub';

  const gitRepUrl = 'git@git.snpdev.ru:saltpepper/fantasy-website.git';

  const stagingServer = 'fantasy-website@fantasy-direct.snpdev.ru';
  const productionServer = '';

  /* init main config */
  shipit.initConfig({
    default: {
      workspace: shipitSyncingSourceFolder,
      deployTo: deploymentFolder,
      repositoryUrl: gitRepUrl,
      branch: 'master',
      keepReleases: 1,
      deleteOnRollback: true,
      key: sshKeyPath,
      shallowClone: false
    },
    staging: {
      servers: stagingServer
    },
    production: {
      servers: productionServer
    }
  });

  shipit.blTask('buildApp', function() {
    return shipit.local(`yarn build`);
  });

  shipit.blTask('remoteCopyBuild', function() {
    shipit.remoteCopy('./public/*', `${releasesFolder}/${shipit.releaseDirname}/public`);
  });

  shipit.blTask('deleteShipitWorkspace', function() {
    return shipit.local(`rm -rf ${shipitSyncingSourceFolder}`);
  });

  shipit.task('postSetup', [
    'buildApp',
    'remoteCopyBuild',
  ], function() {
    shipit.remote('echo Post setup finished!');
  });

  shipit.on('updated', function () {
    shipit.start('postSetup');
  });

  shipit.on('deployed', function() {
    shipit.start('deleteShipitWorkspace');
  });
};
