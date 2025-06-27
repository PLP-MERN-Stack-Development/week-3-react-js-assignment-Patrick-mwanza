export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded font-semibold transition duration-200";
  const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-amber-400 text-black hover:bg-amber-500",
  danger: "bg-red-500 text-white hover:bg-red-600",
};


  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
