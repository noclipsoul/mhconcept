import Link from "next/link";

function MountainIcon(props: any) {
  return (
    <img
      {...props}
      src="/Mh-concept.svg" // Path to the SVG file in the public folder
      alt="Mountain Icon"
    />
  );
}


export function Logo( ){
  return (
  <Link className="flex items-center gap-2" href="/">
    <MountainIcon className={"h-40 w-40 "} />
  </Link>
);
}