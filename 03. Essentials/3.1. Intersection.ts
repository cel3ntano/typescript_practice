let msg: 'Hello' = 'Hello';

msg = 'Hello';

type Config = {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
};

type Role = {
  role: string;
};

type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
};

const backupCongig: ConfigWithRole = {
  protocol: 'http',
  port: 3000,
  role: 'sysadmin',
};

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const port3000: number = 3000;
const port3001: number = 3001;

const startServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return 'Server started';
};

startServer(serverConfig.protocol, serverConfig.port);

export {};
