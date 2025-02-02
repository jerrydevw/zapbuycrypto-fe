module.exports = {
    apps: [{
        name: 'zapcoin-web',
        script: 'npm',
        args: 'run deploy',
        cwd: './',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production'
        }
    }]
};