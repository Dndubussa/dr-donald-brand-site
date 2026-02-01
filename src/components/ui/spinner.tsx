import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

interface SpinnerProps extends React.ComponentProps<"svg"> {
  size?: "sm" | "md" | "lg" | number
}

function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
  }

  const iconSize = typeof size === "number" ? size : sizeMap[size] || 24

  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      size={iconSize}
      className={cn("animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
