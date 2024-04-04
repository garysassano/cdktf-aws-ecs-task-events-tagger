import { javascript } from "projen";
import { CdktfTypeScriptApp } from "projen-cdktf-app-ts";
const project = new CdktfTypeScriptApp({
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  devDeps: ["projen-cdktf-app-ts"],
  eslint: true,
  minNodeVersion: "20.11.1",
  name: "cdktf-aws-log-ecs-errored-tasks",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9.0.4",
  prettier: true,
  projenrcTs: true,

  deps: [
    "@middy/core@5.2.3",
    "@middy/http-error-handler",
    "@aws-lambda-powertools/logger",
    "@types/aws-lambda",
    "@aws-sdk/client-ecs",
  ],
  terraformProviders: [
    "hashicorp/aws@~> 5.52.0",
    "jSherz/node-lambda-packager@~> 1.2.0",
  ],
});

// Generate CDKTF constructs after installing deps
project.tasks.tryFind("install")?.spawn(project.cdktfTasks.get);

project.synth();
