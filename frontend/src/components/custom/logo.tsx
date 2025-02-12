import Link from "next/link";

function MountainIcon(props: any) {
  return (
    <img
      {...props}
      src="/Mh-concept.png" // Path to the SVG file in the public folder
      alt="Mountain Icon"
    />
  );
}


export function Logo( ){
  return (
  <Link className="flex mt-3 mb-3" href="/">
    <MountainIcon className={"container w-[103.68] h-[72]"} />
  </Link>
);
}