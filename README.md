# ChatGPT Clone - Node.js Backend

## Overview

This repository contains the Node.js backend for a ChatGPT clone. It serves as a proxy server between the ReactJS client and OpenAI's GPT API. The server is Dockerized for easy deployment and is currently hosted on Google Cloud Run.

## Features

- **API Proxy**: Securely interfaces with OpenAI's GPT API while keeping the API key confidential.
- **Dockerized Application**: Ensures consistent environments and easy deployment.
- **Google Cloud Run Hosting**: Leverages the scalability and reliability of Google Cloud Run.

## Getting Started

### Prerequisites

- Docker
- Node.js and NPM (for local development)

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/saintlypioneer/chatGPT-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chatGPT-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t chatgpt-clone-backend .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 8080:8080 chatgpt-clone-backend
   ```

### Deployment to Google Cloud Run

I prefer google console UI and so, refer to the latest docs for the updated steps OR better yet, try duetAI last I heard, it was awesome!

## API Endpoints

There is just one endpoint `\llm` for now.

## License

This project is NOT at all licenced so feel free to use it *as you like it*.

## Acknowledgements

- Thanks to OpenAI for providing the GPT API (although it's not free!).