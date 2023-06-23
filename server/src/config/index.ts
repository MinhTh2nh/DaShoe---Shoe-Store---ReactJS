import cfg from "config";

interface Config {
  database: {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
  },
  servers: {
    api: {
      port: number,
    },
  },
  koa: {
    keys: Array<string> | string,
    session: {
      domain: string
      max_age: number,
    },
  },
}

const config: Config = {
  database: {
    host: cfg.get("database.host") || "",
    port: cfg.get("database.port") || 3306,
    username: cfg.get("database.username") || "",
    password: cfg.get("database.password") || "",
    database: cfg.get("database.database") || "",
  },
  servers: {
    api: {
      port: cfg.get("servers.api.port") || 80,
    },
  },
  koa: {
    keys: cfg.get("koa.keys") || [""],
    session: {
      domain: cfg.get("koa.session.domain") || "",
      max_age: cfg.get("koa.session.max_age") || 86400000,
    },
  },
};

export default config;
