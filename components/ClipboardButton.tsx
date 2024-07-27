"use client";
export default function ClipboardButton({
  citationformat,
}: {
  citationformat: string;
}) {
  const handleClick = () => {
    navigator.clipboard
      .writeText(citationformat)
      .then(() => {
        window.alert("Text successfully copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return <button onClick={handleClick}>Copy to clipboard</button>;
}
