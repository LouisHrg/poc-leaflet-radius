module.exports = {
  apps : [
    {
      name: "gateway",
      script: 'pnpm',
      cwd: "./gateway",
      args: "start:dev",
      watch: true,
    },
    {
      name: "front",
      script: 'pnpm',
      cwd: "./front",
      args: "dev",
      watch: true,
    },
  ]
};
