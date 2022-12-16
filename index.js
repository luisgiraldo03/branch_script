#! /usr/bin/env node

const shell =  require('shelljs');


shell.ls().forEach(folder => {
    shell.cd(folder);
    shell.exec('git checkout ', process.argv[2]);
    shell.cd('..')
});


