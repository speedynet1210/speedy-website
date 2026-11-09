import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out transform active:scale-95 text-sm md:text-base";

  const variants = {
    // Note the 'shadow-speedy-navy/20' -> This is a Tailwind v3 feature (Colored Shadows)
    primary:
      "bg-speedy-navy text-white hover:bg-opacity-90 shadow-lg shadow-speedy-navy/20",
    secondary:
      "bg-white text-speedy-navy border border-gray-200 hover:border-speedy-navy/30 hover:bg-gray-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
