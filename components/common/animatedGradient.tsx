import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGradient = ({ children, className }: Props) => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 animate-gradient rounded-2xl bg-gradient-to-br from-primary-400 via-primary-700 to-secondary-500 bg-[length:400%_400%]" />

      {/* Overlay patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-96 w-96 animate-pulse rounded-full bg-primary-200 mix-blend-overlay blur-3xl filter" />
        <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse rounded-full bg-primary-700 mix-blend-overlay blur-3xl filter" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex h-full items-center justify-center",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
