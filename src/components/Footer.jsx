export default function Footer() {
  return (
    <footer className="bg-purple-100 text-center text-sm text-purple-700 py-4 mt-10">
      &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
    </footer>
  );
}
