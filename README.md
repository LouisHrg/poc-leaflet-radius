# Redis poc for triangulation

Requirement :
- https://pnpm.io/installation
- https://github.com/nvm-sh/nvm
- https://www.docker.com/


### Install

Make sure you have nvm installed, docker running and pnpm installed on your computer.

First, in the root folder run :

```bash
nvm install 14
nvm use 14
```

Then you can run the script to install all the dependencies :

`make init`

Once you are done, start the project :

`make start`

Before using the POC, you need to fill the redis database with some data, check [redis-data.md](./redis-data.md).

You can access redis with the command `make redis`, then paste the redis commands into the cli and press enter !


### Usage :

You can access the front on [http://localhost:9090](http://localhost:9090) and the gateway on [http://localhost:3000](http://localhost:3000).

