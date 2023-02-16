import { cx } from "@utils/all";

export default function Label(props) {
  const color = {
    green: "text-emerald-700",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600"
  };
  return (
    <a
      className="inline-block py-1 text-xs leading-5 text-green-500 hover:text-green-600 font-bold uppercase"
      href="#">
      #{props.children}
    </a>
  );
}
