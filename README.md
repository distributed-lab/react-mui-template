<div style="text-align: center;"><h1><b>React MUI template</b></h1></div>

### Pre-requisites

#### Environment:

- Node.JS 18 [**[Download Here]**]
- Typescript 5.2 [**[Instructions to Download]**]

| command                      | description                             |
|------------------------------|-----------------------------------------|
| `yarn install` / `yarn`      | install dependencies                    |
| `yarn start`                 | start dev server                        |
| `yarn build`                 | build project                           |
| `yarn lint`                  | lint files (eslint + stylelint)         |
| `yarn rsc [release-version]` | Lints release/release candidate version |
|                              |                                         |

### important:
`.env-development` and `.env-production` is the custom solution for CI, which is used to build the app for different environments e.g. staging and production in github workflow files.

Before start development or manual deploy app with `dist` dir - make sure you have copied `.env-[environment]` file in to `.env.[environment]` file, where `[environment]` is the name of the environment, e.g. `.env-production` or `.env-staging` and fulfill it with your own values.

```bash
cp .env-development .env.development
# or
cp .env-production .env.production
```

### Build docker image with version
```dockerfile
 docker build --no-cache --progress=plain --build-arg BUILD_VERSION=1.0.0-rc.0 -t react-template .
```

#### important
docker-compose config works with `.env` file only, so make sure you have it

### Run container
```
docker run -d -p 80:80 --name [container-name] [image-name]
```

## Prepare for deployment
`.env-development` and `.end-production` is a files, which are used to run build in github workflow files, e.g. [here](.github/workflows/main.yml) at line 32

It sets the environment variables for the `vitejs` build, which are called in werf.yaml file `yarn start` command.

After that, docker image could be used to deploy the app

If you want to build app locally, you can copy `.env-production` files and fulfill it with your own values, then run command `yarn build` or `.env-development` for `yarn start` command

### Dealing with env variables
Env variables can be rewritten by [env.is] (./static/env.js) file in runtime. To do so, we need to provide same [env variables](.env.example) there in json format

## Some additional features

### JsonApi lib

[@distributedlab/jac](https://distributed-lab.github.io/web-kit/modules/_distributedlab_jac.html)

### Web3 provider wrapper lib

[@distributedlab/w3p](https://distributed-lab.github.io/web-kit/modules/_distributedlab_w3p.html)

### Utils, tools, helpers, ...etc

[@distributedlab/tools](https://distributed-lab.github.io/web-kit/modules/_distributedlab_tools.html)

## Contributing

We welcome contributions from the community! To contribute to this project, follow these steps:

1. Fork the repository.
1. Create a new branch with a descriptive name for your feature or bug fix.
1. Make your changes and commit them.
1. Push your changes to your branch on your GitHub fork.
1. Create a pull request from your branch to the `main` branch of this repository.

Please ensure your pull request adheres to the following guidelines:
- Add a clear pull request title;
- Add a comprehensive pull request description that includes the motivation behind the changes, steps needed to test them, etc;
- Update the [CHANGELOG.md] accordingly;
- Keep the codebase clean and well-documented;
- Make sure your code is properly tested;
- Reference any related issues in your pull request;

The maintainers will review your pull request and may request changes or provide feedback before merging. We appreciate your contributions!


## Changelog

For the changelog, see [CHANGELOG.md](./CHANGELOG.md).

## License

This project is under the MIT License — see the [LICENSE](./LICENSE) file for details.

[Download Here]: https://nodejs.org/en/download/
[Instructions to Download]: https://www.typescriptlang.org/download
[CHANGELOG.md]: ./CHANGELOG.md
