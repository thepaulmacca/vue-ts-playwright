# Vue + TypeScript + Vite + Playwright

## Overview

This repo contains a Vue with TypeScript application that uses [Playwright](https://playwright.dev/) for E2E testing. The project was built using [vite](https://vite.dev/).

I've been involved in a few projects recently where Playwright was being used, so I wanted to create something myself to learn about it in a bit more detail. I'm curious like that 😁.

The test is _very_ basic, but I wanted to start small and add more later on. Plus, this is more to understand the concepts.

## Run Application

`npm install`

`npm start`

## Run Playwright Tests

`npm run test-e2e`

## GitHub Actions

A [workflow](.github/workflows/playwright.yml) has been added so that tests run on each push and pull request into the main branch.
