# Phase 1 CI/CD Pipeline

## Introduction
The goal of this phase is to create a vetting phase of the CI/CD pipeline that ensures code quality and automates the testing and documentation generation process. This is achieved through the use of linting, code quality tools, human review, unit testing, and documentation generation tools.

## Pipeline Overview

The pipeline is built on Github Actions and consists of the following steps:

1. Linting: This step checks for code style consistency and formatting issues using ESLint. If there are any issues, the pipeline fails and provides feedback to the developer. <br> We chose to use this as Haoyang has experience with it and he recommended it. ESLint is an open source project that helps you find and fix problems with JavaScript code. In addition, it statically analyzes code to quickly find problems, and it is built into text editors and runs ESLint as part of our project’s continuous integration pipeline to find issues. After it finds the issues, it will fix problems automatically most of the time and be syntax-aware, which means we won’t face errors introduced by transitional find-and-repace algorithms. In addition, if we want,  we can customize it. For example, pre-processs code, use custom parsers, and add rules besides ESLint’s built-in rules.The guidelines to use ESList can be found [here](https://eslint.org/docs/latest/). <br>
Installation Instructions: 
- (A) Install Node.js ready and built with SSL support.
- (B) Install ESLint using command `npm init @eslint/config`. Then choose third option “To check syntax, find problems, and enforce code style”.
[!Image](/admin/cipipeline/eslint1.png)
- (C) Configure ESLint using command `npm init @eslint/config -- --config semistandard`
[!Image](/admin/cipipeline/eslint2.png)


