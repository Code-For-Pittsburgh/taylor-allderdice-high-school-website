import { cx } from "@utils/all";

export default function Label(props) {
  return (
    <span
      className={`inline-block py-1 leading-5 text-green-500 hover:text-green-600 font-bold uppercase ${
        props.size === "large" ? "text-xl" : "text-sm"
      }`}>
      #{props.children}
    </span>
  );
}
