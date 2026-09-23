
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number; // kept for API compatibility, unused
}

export default function MagneticButton({ children }: MagneticButtonProps) {
  return (
    <span className="btn-shimmer-wrap">
      {children}
    </span>
  );
}
