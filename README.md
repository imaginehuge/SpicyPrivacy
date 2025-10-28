# Official Repository of Spicy Privacy

This repository contains the official web application for Spicy Privacy, a platform dedicated to privacy research and services.

## Tech Stack

*   **Framework:** Next.js 15.5.4
*   **Library:** React 19.1.0
*   **Language:** TypeScript 5
*   **Styling:** Tailwind CSS 4
*   **UI Components:** Radix UI
*   **Icons:** Lucide React
*   **Linting:** ESLint

## Setup for Local Development

To get this project up and running on your local machine, follow these steps:

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-company/spicy-privacy.git
    cd spicy-privacy
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the development server with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
.
├── public/                 # Static assets (images, fonts)
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── (site)/         # Grouped site pages (about, contact, etc.)
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   │   ├── contact/        # Contact-specific components
│   │   └── ui/             # Shadcn/ui or similar generic UI components
│   ├── data/               # Local data files (e.g., research.json)
│   └── lib/                # Utility functions and helpers
├── .gitignore              # Specifies intentionally untracked files to ignore
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # This file
├── tsconfig.json           # TypeScript configuration
└── ...
```

## Data Files

The `src/data/` directory contains JSON files used to populate dynamic content within the application. Currently, it includes:

### `src/data/research.json`

This file stores information about research articles or blog posts. Each entry in the JSON array represents a single research item with the following structure:

```json
[
  {
    "id": 1,
    "title": "RESEARCH TITLE",
    "description": "RESEARCH DESCRIPTION - This is where the a small and catchy description for the blog will go.",
    "tags": ["Tag 1", "Tag 2", "Tag 3"],
    "link": "https://example.com",
    "source": "SpicyPrivacy Blog",
    "date": "October 11, 2025",
    "authors": "SpicyPrivacy Research Team"
  }
]
```