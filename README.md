# EDGY FASHION - Full-Stack E-commerce Website

A modern, edgy streetwear fashion brand e-commerce website built with Next.js, featuring a dark aesthetic inspired by high-end fashion brands like dropdead.world.

## 🚀 Features

### Frontend
- **Modern UI/UX**: Edgy, dark aesthetic with smooth animations
- **Responsive Design**: Fully optimized for mobile and desktop
- **Product Showcase**: Featured products carousel and category browsing
- **Advanced Filtering**: Search, category, and price range filters
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **User Authentication**: Separate login/register for users and admin
- **Wishlist Functionality**: Save favorite products for later
- **Shopping Cart**: Add products to cart and manage quantities with size selection
- **Checkout System**: Complete checkout flow with payment integration
- **User Dashboard**: Order history, profile management, and settings
- **Information Pages**: Help, privacy policy, refunds, returns, shipping, size guide, and terms

### Backend
- **Next.js API Routes**: RESTful API endpoints for products, orders, and authentication
- **Dual Authentication**: Separate JWT-based authentication for users and admins
- **Database**: PostgreSQL with Prisma ORM
- **Product Management**: Full CRUD operations for products
- **Admin Management**: Comprehensive admin user system
- **Image Upload**: Supabase storage integration for product and profile images
- **Analytics**: Sales metrics and performance tracking
- **Payment Integration**: Razorpay payment gateway integration
- **Email Notifications**: Nodemailer-based email system for order confirmations
- **OTP Verification**: Secure OTP-based email verification system
- **Cart Management**: Persistent cart with size selection and quantity management

### Admin Dashboard
- **Product Management**: Add, edit, and delete products
- **Order Management**: View and manage customer orders
- **Analytics**: Sales metrics and performance insights
- **Inventory Control**: Stock management and updates
- **Admin Profile**: Detailed admin information and permissions
- **User Management**: View and manage customer accounts
- **Wishlist Management**: Monitor customer wishlists

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens with bcrypt password hashing
- **File Storage**: Supabase Storage
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast
- **Image Gallery**: React Image Gallery
- **Deployment**: Vercel-ready with Supabase/PostgreSQL support

## 📁 Project Structure

```
edgy-fashion-ecommerce/
├── app/                          # Next.js 14 app directory
│   ├── about/                   # About page
│   ├── admin/                   # Admin pages
│   │   ├── page.tsx            # Admin login page
│   │   └── dashboard/          # Protected admin dashboard
│   ├── api/                     # API routes
│   │   ├── admin/              # Admin-specific API endpoints
│   │   │   ├── analytics/      # Analytics data
│   │   │   ├── change-password/ # Admin password change
│   │   │   ├── orders/         # Order management
│   │   │   ├── products/       # Product management
│   │   │   ├── profile/        # Admin profile management
│   │   │   ├── users/          # User management
│   │   │   └── wishlist/       # Wishlist management
│   │   ├── auth/               # Authentication endpoints
│   │   │   ├── admin/          # Admin authentication
│   │   │   ├── login/          # User login API
│   │   │   ├── logout/         # User logout API
│   │   │   ├── me/             # User profile API
│   │   │   ├── signup/         # User registration API
│   │   │   └── verify-otp/     # OTP verification
│   │   ├── cart/               # Cart management
│   │   │   ├── cleanup/        # Cart cleanup
│   │   │   └── route.ts        # Cart CRUD operations
│   │   ├── debug/              # Debug endpoints
│   │   ├── orders/             # Order management
│   │   ├── payment/            # Payment integration
│   │   │   └── razorpay/       # Razorpay payment gateway
│   │   ├── products/           # Product management
│   │   ├── upload/             # File upload endpoints
│   │   ├── user/               # User-specific endpoints
│   │   │   ├── change-password/ # User password change
│   │   │   └── profile/        # User profile management
│   │   └── wishlist/           # Wishlist management
│   ├── cart/                    # Shopping cart page
│   ├── checkout/               # Checkout page
│   ├── contact/                 # Contact page
│   ├── help/                    # Help page
│   ├── login/                   # User login/register page
│   ├── privacy/                 # Privacy policy page
│   ├── product/                 # Product detail pages
│   ├── refunds/                 # Refunds policy page
│   ├── returns/                 # Returns policy page
│   ├── shipping/                # Shipping information page
│   ├── shop/                    # Shop page
│   ├── size-guide/              # Size guide page
│   ├── terms/                   # Terms and conditions page
│   ├── user/                    # User dashboard
│   ├── wishlist/                # User wishlist page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                  # Reusable components
│   ├── admin/                  # Admin-specific components
│   ├── CategoriesSection.tsx   # Category grid
│   ├── EnhancedCart.tsx        # Enhanced cart component
│   ├── FeaturedProducts.tsx    # Product carousel
│   ├── Footer.tsx              # Site footer
│   ├── HeroSection.tsx         # Hero banner
│   ├── LoadingSpinner.tsx      # Loading component
│   ├── MobileTimeline.tsx      # Mobile timeline component
│   ├── Navigation.tsx          # Main navigation
│   ├── ProductFilters.tsx      # Filter sidebar
│   ├── ProductGrid.tsx         # Product listing
│   └── WishlistButton.tsx      # Wishlist toggle button
├── lib/                        # Utility libraries
│   ├── FlyingHeartContext.tsx  # Flying heart animation context
│   ├── auth.ts                 # Authentication utilities
│   ├── cart.ts                 # Cart management
│   ├── cartService.ts          # Cart service functions
│   ├── db.ts                   # Database connection
│   ├── email.ts                # Email service configuration
│   ├── otp.ts                  # OTP verification utilities
│   ├── otp-simple.ts           # Simplified OTP utilities
│   ├── supabase.ts             # Supabase client and utilities
│   ├── types.ts                # TypeScript types
│   ├── useCartRefresh.ts       # Cart refresh hook
│   └── useWishlist.ts          # Wishlist hook
├── prisma/                     # Database schema
│   └── schema.prisma           # Prisma schema definition
├── scripts/                    # Database scripts
│   └── seed-admin.ts           # Admin user seeding script
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── package.json                # Dependencies and scripts
├── package-lock.json           # Lock file for dependencies
├── next.config.js              # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Supabase account (for file storage)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edgy-fashion-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/edgy_fashion_db"
   
   # JWT Secret for Authentication
   JWT_SECRET="your-jwt-secret-here"
   
   # Supabase Configuration (for file storage)
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   
   # Email Configuration (Nodemailer)
   EMAIL_HOST="smtp.gmail.com"
   EMAIL_PORT="587"
   EMAIL_USER="your-email@gmail.com"
   EMAIL_PASSWORD="your-app-password"
   EMAIL_FROM="noreply@edgyfashion.com"
   
   # Razorpay Configuration
   RAZORPAY_KEY_ID="your-razorpay-key-id"
   RAZORPAY_KEY_SECRET="your-razorpay-key-secret"
   
   # Node Environment
   NODE_ENV="development"
   ```

4. **Set up the database and start development**
   ```bash
   # This will automatically generate Prisma client, push schema, and start dev server
   npm run dev
   ```

5. **Seed admin user** (optional)
   ```bash
   npm run db:seed-admin
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development Commands

### Automated Development
```bash
# Development (automatically generates client and pushes schema)
npm run dev

# If you want to skip Prisma steps sometimes
npm run dev:clean

# View database
npm run db:studio
```

### Manual Database Commands
```bash
npm run db:generate  # Generate Prisma client
npm run db:push      # Push database schema
npm run db:migrate   # Run database migrations
npm run db:seed-admin # Seed admin user
```

### Other Commands
```bash
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔐 Authentication System

### User Authentication
- **URL**: `/login`
- **Features**: User login/register with JWT tokens
- **Redirects**: Users → `/user/dashboard`, Admins → `/admin/dashboard`

### Admin Authentication
- **URL**: `/admin`
- **Default Credentials**: 
  - Email: `admin1@email.com`
  - Password: `Admin@69`
- **Features**: Admin-only login with comprehensive dashboard
- **Redirects**: Admins → `/admin/dashboard`

## 📊 Database Schema

The application uses the following main entities:

### User Model
- **Users**: Customer accounts with orders, wishlists, and cart
- **Role**: CUSTOMER (default)
- **Fields**: id, email, name, password, role, phoneNumber, countryCode, address, city, state, zipCode, country, landmark, areaOrStreet, profileImage, isActive, lastLoginAt, createdAt, updatedAt

### Admin Model
- **Admins**: Comprehensive admin user system
- **Fields**: id, email, password, firstName, lastName, phoneNumber, address, city, state, zipCode, country, profileImage, bio, department, permissions, isActive, lastLoginAt, loginAttempts, lockedUntil, twoFactorEnabled, twoFactorSecret, createdAt, updatedAt

### Product Model
- **Products**: Product catalog with categories and sizes
- **Categories**: TSHIRTS, HOODIES, ACCESSORIES, PANTS, SHOES
- **Fields**: id, name, description, price, originalPrice, stock, category, imageUrls, sizes, isFeatured, discount, isActive, displayOrder, createdAt, updatedAt

### Order Model
- **Orders**: Customer orders and order items
- **Fields**: id, userId, totalPrice, status, createdAt, updatedAt
- **Status**: PENDING, PROCESSING, SHIPPED, OUT_FOR_DELIVERY, DELIVERED, CANCELLED

### OrderItem Model
- **OrderItems**: Individual order line items
- **Fields**: id, orderId, productId, quantity, price, sizes

### Wishlist Model
- **Wishlist**: Customer saved products
- **Fields**: id, userId, productId, createdAt

### Cart Model
- **Cart**: Customer shopping cart with size selection
- **Fields**: id, userId, productId, quantity, sizes, addedAt

### Analytics Model
- **Analytics**: Sales and performance metrics
- **Fields**: id, date, totalSales, totalOrders, totalUsers, revenue, createdAt, updatedAt

### OTPVerification Model
- **OTPVerification**: Email verification system
- **Fields**: id, email, otp, attempts, expiresAt, createdAt, updatedAt

## 🎨 Customization

### Colors & Theme
The design system uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Dark grays and blacks
- **Accent**: Vibrant reds and pinks
- **Custom Classes**: Pre-built component classes for consistent styling

### Fonts
- **Display**: Orbitron (for headings and brand elements)
- **Body**: Inter (for readable text)
- **Mono**: JetBrains Mono (for technical elements)

### Animations
Custom animations and transitions using Framer Motion:
- Page transitions
- Hover effects
- Loading states
- Micro-interactions

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Database Setup
- **Supabase**: Recommended for easy PostgreSQL hosting
- **Railway**: Alternative PostgreSQL hosting
- **Self-hosted**: Use your own PostgreSQL server

### Environment Variables for Production
```env
# Database Configuration
DATABASE_URL="your-production-database-url"

# JWT Secret for Authentication
JWT_SECRET="strong-jwt-secret"

# Supabase Configuration (for file storage)
NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

# Email Configuration (Nodemailer)
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
EMAIL_FROM="noreply@edgyfashion.com"

# Razorpay Configuration
RAZORPAY_KEY_ID="your-razorpay-key-id"
RAZORPAY_KEY_SECRET="your-razorpay-key-secret"

# Node Environment
NODE_ENV="production"
```

## 🛡️ Security Features

- JWT-based authentication for both users and admins
- Password hashing with bcrypt
- Protected admin routes
- Input validation and sanitization
- CORS protection
- Separate authentication systems for users and admins
- Secure file upload with type and size validation
- Admin account lockout after failed login attempts
- OTP-based email verification for user registration
- Secure cart management with user-specific isolation

## 🎯 Future Enhancements

- [ ] Order tracking system with real-time updates
- [ ] Multi-language support (i18n)
- [ ] SEO optimization and meta tags
- [ ] Two-factor authentication for admins
- [ ] Advanced product filtering and sorting
- [ ] Product reviews and ratings system
- [ ] Inventory alerts and low stock notifications
- [ ] Customer support chat integration
- [ ] Social media login integration
- [ ] Discount coupon system
- [ ] Product recommendation engine
- [ ] Mobile app development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js and modern web technologies**
