# NavbarX

NavbarX is a React-based library that offers a stunning collection of animated, customizable navigation bars. These components are designed for modern web applications, delivering elegant aesthetics and seamless user interactions.

i have used AI in writing this readme.md as i am not that good in writing readme stuff and the rest of project is made completely by me

## Features

- **10 Unique Navbar Variants**: Includes designs like Floating, Glitch, Hexagon, and more.
- **Responsive Design**: Perfectly adapts to all screen sizes.
- **Modern Animations**: Leveraging CSS effects for visually pleasing transitions.
- **Customizable Components**: Easily adapt the design to suit your project.
- **TypeScript Support**: Ensures robust type-checking for enhanced development experience.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/NavbarX.git
cd NavbarX
```

Install the required dependencies:

```bash
npm install
```

## Usage

### Basic Setup

1. Import the desired navbar component and include it in your React application.

```tsx
import React from 'react';
import { FloatingNavbar } from '@/components/navbar/variants/FloatingNavbar';

function App() {
  return (
    <div>
      <FloatingNavbar>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
      </FloatingNavbar>
    </div>
  );
}

export default App;
```

2. Start the development server:

```bash
npm run dev
```

### Navbar Variants

Here is the list of navbar designs available:

- **Floating Navbar**: Elegant floating design with blur effect.
- **Glitch Navbar**: Cyberpunk glitch effect.
- **Hexagon Navbar**: Geometric shape with gradient.
- And many more! Explore all variants in the `components/navbar/variants` directory.

## Project Structure

```
├── components
│   └── navbar
│       └── variants
│           ├── FloatingNavbar.tsx
│           ├── GlitchNavbar.tsx
│           ├── HexagonNavbar.tsx
│           └── ...
├── App.tsx
├── package.json
└── README.md
```

## Contributing

We welcome contributions to improve and expand the library. To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Open a pull request.

