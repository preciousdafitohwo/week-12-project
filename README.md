Link to live Deployment on vercel - https://week-12-project.vercel.app/

**StayActive**
Welcome to StayActive! At StayActive, we are here to guide and support you as you complete your wellness journey. Our mission is to empower individuals to take control of their health and well-being through active living. We aim to promote holistic wellness, provide expert guidance, foster a supportive community, and encourage lifelong fitness.

**Features**
Swimming: Dive into our comprehensive swimming guides.
Strength Training: Discover dynamic workouts and personalized coaching.
Wellness Articles: Stay informed with articles on nutrition, mental health, and more.
Community Support: Connect with others on their wellness journey through our forums and social media groups.
**Potential Future Features**
Customizable Workouts: Tailor workouts to your specific needs and track progress.
Diet and Nutrition Tracking: Integrate tools for tracking your diet and nutritional intake.
Virtual Classes: Participate in live or recorded fitness classes.
Event Calendars: Stay updated on wellness events and workshops.
Health Monitoring: Connect wearable devices to monitor health metrics.
Challenges and Rewards: Participate in challenges and earn rewards for milestones.
User Notifications: Receive notifications about new content and activities.
User Messaging: Communicate privately with other members.
User Blocking: Manage your interactions by blocking unwanted communication.
**Setup Instructions**
Fork the repository: (check "copy the main branch only") and clone your fork to your local machine.
Install dependencies: Run npm install to install all necessary packages.
Environment Variables: Create a .env.local file in the root directory and add the following environment variables:
makefile
**Copy code**
AUTH_SECRET=your_auth_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
DATABASE_URL=postgres://username:password@host:port/database
Database Schema: Create the database schema by running the SQL commands in schema.sql in your database (e.g., by running the commands in Supabase Query Editor).
Start the Development Server: Run npm run dev to start the development server.
Open the Application: Open http://localhost:3000 with your browser to see the site.
**Technologies Used**
Next.js: A React framework for building modern web applications.
Tailwind CSS: A utility-first CSS framework for styling.
Auth.js (formerly Next Auth): For user authentication.
Postgres: For data storage, accessed with raw SQL queries using the pg package.
**Join Us!**
Your wellness journey is unique, and we are here to support you every step of the way. Let's complete your wellness journey together with strength, resilience, and a sense of community at StayActive.com.

