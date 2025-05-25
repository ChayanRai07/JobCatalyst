import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <SignUp
    appearance={{
        baseTheme: "dark",
        layout: {
          socialButtonsVariant: "solid",
        },
        variables: {
          colorBackground: "#000000", // Dark mode background
          colorText: "#ffffff", // White text everywhere
        },
        elements: {
            
          socialButtonsBlockButton: {
            backgroundColor: "#ffffff", // Force white background for social buttons
            color: "#000000", // Ensure black text
            borderRadius: "8px", // Smooth corners
            border: "1px solid #ffffff", // White border for clarity
            fontWeight: "bold", // Bold text for better visibility
            fontSize: "16px", // Increase text size if needed
            padding: "12px 16px", // Add spacing\
            "&:hover": {
          backgroundColor: "#f0f0f0", // Light gray on hover
        },
          },
          socialButtonsBlockButtonText: {
            color: "#000000", // Ensure the text inside the button is black
            fontWeight: "bold",
          },
          socialButtonsBlockButtonIcon: {
            filter: "invert(0)", // Keep Google logo visible
          },
        },
      }}
    />
  )
}

export default page