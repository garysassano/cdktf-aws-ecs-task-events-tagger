# cdktf-aws-ecs-task-events-tagger

CDKTF app that captures all [ECS Task events](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_task_events.html) that contain errored tasks and sends them to a Lambda function for tagging and storage in CloudWatch Logs.

### Related Apps

- [cdktf-aws-ecs-task-events-logger](https://github.com/garysassano/cdktf-aws-ecs-task-events-logger) - Sends ECS Task events directly to CloudWatch Logs.

## Prerequisites

- **_AWS:_**
  - Must have authenticated with [Default Credentials](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration) in your local environment.
- **_Terraform:_**
  - Must be [installed](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli#install-terraform) in your system.
- **_Node.js + npm:_**
  - Must be [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in your system.

## Installation

```sh
npx projen install
```

## Deployment

```sh
npx projen deploy
```

## Cleanup

```sh
npx projen destroy
```

## Architecture Diagram

![Architecture Diagram](./src/assets/arch-diagram.svg)
