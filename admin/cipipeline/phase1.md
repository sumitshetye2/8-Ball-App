# Phase 1 CI/CD Pipeline

## Introduction
The goal of this phase is to create a vetting phase of the CI/CD pipeline that ensures code quality and automates the testing and documentation generation process. This is achieved through the use of linting, code quality tools, human review, unit testing, and documentation generation tools.

## Pipeline Overview

The pipeline is built on Github Actions and consists of the following steps:

1. Linting: This step checks for code style consistency and formatting issues using ESLint. If there are any issues, the pipeline fails and provides feedback to the developer. <br> We chose to use this as Haoyang has experience with it and he recommended it. 
