# Saudi Dashboard - منصة العقود الموحدة

A comprehensive dashboard application for managing contracts and labor in Saudi Arabia, built with React, Vite, and Tailwind CSS.

## Features

- **Landing Page**: Professional landing page with smooth scrolling navigation
- **Authentication**: Login and registration system with local storage
- **Dashboard**: Comprehensive dashboard with multiple sections:
  - Campaigns management (حملات الحج والعمرة)
  - Contractors management (الجهات المتعاقدة)
  - Workers management (العمالة الموسمية)
  - Contracts tracking (العقود)
  - Permits management (التصاريح)
  - Compliance monitoring (التحقق والامتثال)
  - Reports and analytics (التقارير والإحصائيات)
  - Workflow management (مخطط العمل والتكامل)
  - Notifications (الإشعارات)
  - Settings (الإعدادات)

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion, AOS
- **Routing**: React Router DOM 7
- **Notifications**: React Hot Toast
- **Smooth Scrolling**: React Scroll

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── AuthContext.jsx          # Authentication context
│   ├── Login.jsx               # Login component
│   ├── Register.jsx            # Registration component
│   ├── landingPage/
│   │   └── landing.jsx         # Landing page component
│   └── Dashboard/
│       └── Dashboard.jsx       # Main dashboard component
├── App.jsx                     # Main app component with routing
├── main.jsx                    # App entry point
├── index.css                   # Global styles
└── App.css                     # App-specific styles
```

## Deployment

This project is configured for deployment on Vercel. The build command is:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Arabic Language Support

The application is fully localized in Arabic with RTL (Right-to-Left) text direction support.

## Security Notes

- This is a demo application with mock authentication
- In production, implement proper authentication and API security
- All data is stored in localStorage for demonstration purposes
