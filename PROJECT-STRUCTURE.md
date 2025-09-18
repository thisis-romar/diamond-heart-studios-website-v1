# Diamond Heart Studios - Project Structure & Copilot Instructions

## Project Overview
Professional music studio website for Diamond Heart Studios, featuring Chris Ramos as lead producer/engineer. Based in Toronto/Mississauga, Canada, specializing in game scoring, EDM production, and classical-digital fusion.

## Complete Project Tree
```
h:\electronic-music-studio\
├── .vscode/                          # VS Code configuration
├── css/
│   └── style.css                     # Main stylesheet (2000+ lines)
├── images/
│   ├── .gitkeep                      # Git placeholder
│   ├── mixing-console.jpg            # 454KB - Studio equipment photo
│   ├── professional-microphone.jpg   # 347KB - Recording setup photo
│   └── studio-hero.jpg               # 654KB - Main studio photo
├── js/
│   └── main.js                       # JavaScript functionality
├── DEVELOPMENT.md                    # Development guidelines
├── index.html                        # Main website file
├── nexus-studio.code-workspace       # VS Code workspace config
├── package.json                      # Node.js dependencies
├── PROJECT-STRUCTURE.md              # This file
├── QUICK-REFERENCE.md                # Quick reference guide
└── README.md                         # Project documentation
```

## Current Website Status (September 18, 2025)
- **Status**: Images removed due to site breaking issues
- **Theme**: Professional music studio business
- **Color Scheme**: Gold (#D4AF37), Deep Blue (#1a365d), Rich Purple (#553c9a)
- **Design**: Glassmorphism with professional aesthetic
- **Images**: Replaced with styled placeholder elements using FontAwesome icons

## File Details

### index.html (Main Website)
- **Lines**: ~670 lines
- **Structure**: Professional single-page application
- **Sections**:
  - Hero section with Chris Ramos feature
  - Services (Recording, Mixing, Mastering, Production)
  - Portfolio (Game scores, EDM, Commercial work)
  - About Chris Ramos (Biography, stats, specialties)
  - Studio Tour (Virtual tour, equipment gallery)
  - Contact form
- **Images**: All replaced with professional placeholder elements
- **Icons**: FontAwesome for interactive elements

### css/style.css (Main Stylesheet)
- **Lines**: 2000+ lines
- **Architecture**: CSS Custom Properties (CSS Variables)
- **Key Features**:
  - Professional color palette
  - Glassmorphism effects
  - Responsive grid layouts
  - Smooth animations and transitions
  - Mobile-first responsive design
- **Recent Changes**: All background images removed, placeholder styles added

### js/main.js (JavaScript)
- **Class**: DiamondHeartStudio
- **Features**:
  - Smooth scrolling navigation
  - Portfolio filtering
  - Form validation
  - Loading states
  - Interactive animations
- **Branding**: Updated for Diamond Heart Studios

## Business Context
- **Studio Name**: Diamond Heart Studios
- **Location**: Toronto/Mississauga, Canada
- **Lead**: Chris Ramos (Producer/Engineer)
- **Services**: Recording, Mixing, Mastering, Production
- **Specialties**: Game Scoring, EDM Production, Classical-Digital Fusion
- **Notable Work**: Distant Worlds II, Warhammer scores, Zephon

## Design System

### Color Palette
```css
--primary-gold: #D4AF37      /* Primary brand color */
--deep-blue: #1a365d         /* Secondary dark blue */
--rich-purple: #553c9a       /* Accent purple */
--accent-cyan: #00ced1       /* Highlight cyan */
--dark-bg: #0a0a0a          /* Main background */
--dark-surface: #1a1a1a     /* Surface elements */
--dark-card: #2d2d2d        /* Card backgrounds */
```

### Typography
- **Primary**: 'Orbitron' (Futuristic, headings)
- **Secondary**: 'Inter' (Modern, body text)
- **Fallbacks**: Sans-serif system fonts

### Layout System
- **Grid**: CSS Grid for major layouts
- **Flexbox**: Component-level layouts
- **Responsive**: Mobile-first approach
- **Breakpoints**: 768px (tablet), 480px (mobile)

## Current Issues & Solutions
- **Images Breaking Site**: ✅ Resolved - All images replaced with styled placeholders
- **Professional Aesthetic**: ✅ Maintained with icon-based placeholders
- **Responsive Design**: ✅ Fully functional
- **Loading Performance**: ✅ Improved without large images

## Development Guidelines

### Code Standards
- Use CSS custom properties for colors
- Maintain consistent naming conventions
- Keep responsive design principles
- Use semantic HTML structure
- Implement accessibility features

### Image Handling
- **Current Approach**: Styled placeholder elements with FontAwesome icons
- **Benefits**: Faster loading, consistent styling, no broken image issues
- **Icons Used**: fas fa-gamepad, fas fa-music, fas fa-microphone, etc.

### Future Enhancements
- Consider SVG illustrations instead of photos
- Implement lazy loading if images are reintroduced
- Add more interactive animations
- Optimize for Core Web Vitals

## Copilot Instructions
When working on this project:
1. **Maintain Professional Aesthetic**: Keep the gold/blue/purple color scheme
2. **Preserve Business Context**: Chris Ramos, Diamond Heart Studios, Toronto-based
3. **Use Placeholder System**: Continue using icon-based placeholders instead of images
4. **Responsive First**: Test all changes on mobile and desktop
5. **Performance Focus**: Keep loading times optimal
6. **Accessibility**: Maintain ARIA labels and semantic structure
7. **CSS Architecture**: Use existing custom properties system
8. **JavaScript**: Work with existing DiamondHeartStudio class

## Testing Checklist
- [ ] Mobile responsiveness (768px, 480px breakpoints)
- [ ] Cross-browser compatibility
- [ ] Loading performance
- [ ] Accessibility compliance
- [ ] Form functionality
- [ ] Smooth scrolling navigation
- [ ] Portfolio filtering
- [ ] Hover effects and animations

## Last Updated
September 18, 2025 - Images removed and placeholder system implemented
