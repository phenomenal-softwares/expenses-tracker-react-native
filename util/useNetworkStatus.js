import { useEffect, useState } from "react";
import * as Network from "expo-network";

export function useNetworkStatus() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const checkNetwork = async () => {
      const status = await Network.getNetworkStateAsync();
      setIsConnected(status.isConnected && status.isInternetReachable);
    };

    checkNetwork();

    const interval = setInterval(checkNetwork, 5000); // re-check every 5s
    return () => clearInterval(interval);
  }, []);

  return isConnected;
}
