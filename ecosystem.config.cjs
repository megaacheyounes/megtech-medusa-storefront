module.exports = {
  apps: [
    {
      name: "megtech-storefront",
      cwd: "/home/megtech-storefront",
      script: "/home/megtech-storefront/scripts/start-storefront-pm2.sh",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
}
