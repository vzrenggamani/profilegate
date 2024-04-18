import dynamic from "next/dynamic";

// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  async () => (await import("./excalidraw")).default,
  {
    ssr: false,
  }
);

export default function Page() {
  return <ExcalidrawWrapper />;
}
