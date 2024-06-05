import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function NotFound() {
    return (
      <div>
          
        <h2>Page Not Found</h2>
        <p>The current user does not have an account with StayActive.</p>
        <p>Please return to the Home Page or <SignInButton/></p>
        
      </div>
    );
  }