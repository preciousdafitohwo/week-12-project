import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function NotFound() {
    return (
      <div className="p-10 text-white">
          
        <h2 className="font-bold">Page Not Found</h2>
        <p>The current user does not have an account with StayActive.</p>
        <p>Please return to the Home Page or <SignInButton/></p>
        
      </div>
    );
  }