/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className
}) {
  return (
    (<div
      className={cn(
        "   transition-shadow duration-500 ease-out [--bg-size:300%]  dark:bg-black/40",
        className
      )}>
      <div
        className={``} />
      {children}
    </div>)
  );
}
