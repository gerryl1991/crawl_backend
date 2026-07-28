# Crawler Backend

A Node.js/TypeScript backend service for web crawling, built with Express, Cheerio, Axios, and the Google APIs client.

## Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express 5
- **HTTP Client:** Axios
- **HTML Parsing:** Cheerio
- **Google Integration:** googleapis
- **Dev Tooling:** nodemon, ts-node

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher (recommended)
- npm (bundled with Node.js)

Check your versions:

```bash
node -v
npm -v
```

## Installation

1. **Clone the repository**

```bash
   git clone <your-repository-url>
   cd crawler_backend
```

2. **Install dependencies**

```bash
   npm install
```

3. **Set up environment variables**

   Create a `.env` file in the project root if the app requires configuration (e.g. Google API credentials, port number):

```env
   PORT=3000
   GOOGLE_APPLICATION_CREDENTIALS=./credentials.json
```

   > Adjust variables based on what your `src/server.ts` actually expects.

## Running the Project

### Development mode

Runs the server with `nodemon` and `ts-node`, auto-restarting on file changes:

```bash
npm run dev
```

### Production build

1. Compile TypeScript to JavaScript:

```bash
   npm run build
```

2. Start the compiled server:

```bash
   npm start
```

## Project Structure
