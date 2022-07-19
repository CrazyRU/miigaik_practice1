import React from "react";
import { useIdle } from "use-idle";
 
const Example = () => {
  const isIdle = useIdle();
  useEffect(() => {
    isIdle && alert("You've gone idle!");
  }, [isIdle]);
 
  return <div>Don't move a damn muscle.</div>;
};