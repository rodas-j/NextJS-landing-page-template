'use client'

import { Button } from "@/components/ui/button";

function SupportButton() {
  const handleButtonClick = () => {
    window.location.href = 'mailto:email@email.com';
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      > 
        <Button variant={"outline"} onClick={handleButtonClick}>
            Click the following button to reach support
        </Button>
        
      </div>
    </>
  );
}

export default SupportButton;
