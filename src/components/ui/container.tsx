import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("container mx-auto px-4 md:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({ children, className, ...props }: ContainerProps) {
  return (
    <section className={cn("py-8 md:py-16 lg:py-20", className)} {...props}>
      {children}
    </section>
  );
}

export function SectionTitle({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div className={cn("mb-8 text-center md:mb-14", className)} {...props}>
      {children}
    </div>
  );
}

export function ProductGrid({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ProductItem({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-full overflow-hidden group border-none shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ImageOverlay({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface BackgroundImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  className?: string;
  overlayColor?: string;
  children?: React.ReactNode; // Optional children
}

export function BackgroundImage({
  src,
  alt,
  className,
  overlayColor = "bg-earth-dark/50",
  children,
  ...props
}: BackgroundImageProps) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)} {...props}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className={`absolute inset-0 ${overlayColor}`}></div>
      {children}
    </div>
  );
}
