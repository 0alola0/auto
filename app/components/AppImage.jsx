import Image from "next/image";

export default function AppImage(props) {
  return <Image {...props} alt={props.alt || "image"} />;
}
