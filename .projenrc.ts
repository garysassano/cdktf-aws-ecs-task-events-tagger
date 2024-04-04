import { javascript } from "projen";
import { CdktfTypeScriptApp } from "projen-cdktf-app-ts";

const project = new CdktfTypeScriptApp({
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  devDeps: ["projen-cdktf-app-ts"],
  eslint: true,
  gitignore: ["*.tfstate*", "**/*.zip"],
  minNodeVersion: "22.12.0",
  name: "cdktf-aws-ecs-task-events-tagger",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9",
  prettier: true,
  projenrcTs: true,

  deps: [
    "@aws-lambda-powertools/logger",
    "@aws-sdk/client-ecs",
    "@middy/core",
    "@middy/http-error-handler",
    "@types/aws-lambda",
  ],
  terraformProviders: [
    "hashicorp/aws@~> 5.82.2",
    "jSherz/node-lambda-packager@~> 1.5.2",
  ],
});

// Generate CDKTF constructs after installing deps
project.tasks.tryFind("install")?.spawn(project.cdktfTasks.get);

project.synth();
