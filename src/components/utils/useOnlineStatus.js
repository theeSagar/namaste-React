import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Correctly initialize state
  const [onlineStatus, setOnlineStatus] = useState(true);

  // try to check if user is online
  useEffect(() => {
    const handleOffline = () => {
      setOnlineStatus(false); // Update state using the setter function
    };

    const handleOnline = () => {
      setOnlineStatus(true); // Update state using the setter function
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return onlineStatus;
};

export default useOnlineStatus;
