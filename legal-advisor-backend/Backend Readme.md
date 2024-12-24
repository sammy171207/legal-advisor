# Legal Advisor Platform - Backend

## 📚 Overview
The backend of the **Legal Advisor Platform** serves as the core of the application, managing user data, lawyer profiles, AI integrations, and payment processing. Built using Node.js and Express, the backend is designed to ensure secure, scalable, and efficient operations.

## 🚀 Features
- **Authentication & Authorization**: Secure user authentication using JWT and role-based access control (RBAC).
- **Database Management**: MongoDB for storing user details, lawyer profiles, bookings, and transactions.
- **AI Integration**: Machine Learning models for analyzing case details and recommending lawyers.
- **Payment Gateway**: Integration with Stripe or PayPal for secure payment processing.
- **Error Handling**: Comprehensive error handling for APIs with proper status codes and messages.
- **API Documentation**: Fully documented RESTful APIs using Swagger or Postman collections.

## 🛠️ Tech Stack

### Core Technologies
- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Lightweight web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for flexible schema design and scalability.

### Additional Libraries & Tools
- **Mongoose**: ODM library for MongoDB interaction.
- **JWT (jsonwebtoken)**: For secure token-based authentication.
- **bcrypt.js**: For password hashing.
- **Cors**: For handling cross-origin requests.
- **Dotenv**: For managing environment variables securely.
- **Stripe/PayPal SDKs**: For payment processing.
- **Winston/Morgan**: Logging libraries for debugging and monitoring.

### AI Integration
- **OpenAI API or Custom Models**: Used for natural language processing and case analysis.
- **Flask (optional)**: For hosting AI models as microservices if not directly using external APIs.

## 🖂️ Folder Structure

```
backend/
|— config/             # Configuration files (e.g., database, environment variables)
|— controllers/       # Business logic for API routes
|— middlewares/       # Middleware functions (e.g., authentication, error handling)
|— models/            # Mongoose models for MongoDB collections
|— routes/            # API route definitions
|— services/          # Service layer for interacting with third-party APIs or utilities
|— utils/             # Helper functions and utilities
|— .env               # Environment variable configuration (ignored by git)
|— server.js          # Entry point of the backend
```

## 🔎 Detailed Description of Key Folders

### 1. **config/**
Contains configuration files, such as:
- `db.js`: Handles MongoDB connection using Mongoose.
- `env.js`: Reads and validates environment variables.

### 2. **controllers/**
Houses functions that contain the core logic for handling requests and sending responses, such as:
- `authController.js`: Handles user login, registration, and token management.
- `lawyerController.js`: Manages CRUD operations for lawyer profiles.
- `bookingController.js`: Handles appointment scheduling.

### 3. **middlewares/**
Includes middleware functions for:
- **Authentication**: Validates JWT tokens.
- **Error Handling**: Captures and formats errors for API responses.
- **Logging**: Tracks API requests and responses.

### 4. **models/**
Defines Mongoose schemas and models for database collections:
- `User.js`: Schema for user details and roles.
- `Lawyer.js`: Schema for lawyer profiles.
- `Booking.js`: Schema for user-lawyer appointments.
- `Transaction.js`: Schema for payment details.

### 5. **routes/**
Defines API endpoints and links them to corresponding controllers:
- `authRoutes.js`: Endpoints for authentication and user management.
- `lawyerRoutes.js`: Endpoints for lawyer CRUD operations.
- `bookingRoutes.js`: Endpoints for scheduling and managing appointments.

### 6. **services/**
Contains reusable service functions for interacting with external APIs or abstracting business logic, such as:
- `paymentService.js`: Handles payment gateway integration.
- `aiService.js`: Interacts with AI APIs for case analysis.

### 7. **utils/**
Provides helper utilities, including:
- `responseHandler.js`: Standardizes API responses.
- `logger.js`: Configures Winston for logging.
- `validators.js`: Custom validation logic for incoming requests.

## 🔧 API Endpoints
### Authentication (Public)
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in and receive a JWT token.

### Lawyer Management (Admin)
- `POST /api/lawyers`: Add a new lawyer profile.
- `GET /api/lawyers`: Fetch all lawyer profiles.
- `PATCH /api/lawyers/:id`: Update lawyer details.
- `DELETE /api/lawyers/:id`: Delete a lawyer profile.

### Booking (Users)
- `POST /api/bookings`: Schedule an appointment.
- `GET /api/bookings`: Fetch user-specific bookings.

### AI Guidance
- `POST /api/ai/analyze`: Analyze case details and receive AI suggestions.

## 🚪 Security
- **Authentication**: Uses JWT tokens for secure access.
- **Data Validation**: Middleware validates incoming requests.
- **Database Security**: Sensitive information is encrypted (e.g., passwords).
- **Environment Variables**: Stores sensitive keys and secrets.

## 🔧 Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/legal-advisor-platform-backend.git
   cd legal-advisor-platform-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file with the following keys:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   STRIPE_API_KEY=your-stripe-key
   AI_API_KEY=your-ai-api-key
   ```

4. **Run the Server**:
   ```bash
   npm start
   ```

## 📊 Future Enhancements
- WebSocket integration for real-time chat during consultations.
- Advanced AI model for legal case evaluation.
- GraphQL support for API queries.

## 🤝 Contributions
Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License
This project is licensed under the MIT License.

