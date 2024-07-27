import { parseBibFile } from "@/utils/parseBib";

const Publications = async () => {
  const entries = parseBibFile();

  return (
    <main>
      <header>
        <h1>
          Publications
          <br />
          <small>Rengga Prakoso Nugroho</small>
        </h1>
        <p>Publikasi Hasil Riset Dasar dan Riset Pengembangan</p>
      </header>
      {entries.map((entry: any, index: any) => (
        <div key={index} className="mb-4 border-b-white">
          <h2>{entry.entryTags.title}</h2>
          <p>
            <strong>Author:</strong> {entry.entryTags.author}
          </p>
          <p>
            <strong>Year:</strong> {entry.entryTags.date}
          </p>
          <p>
            <strong>URL:</strong>{" "}
            <a href={entry.entryTags.url}>{entry.entryTags.url}</a>
          </p>
          <p>
            <strong>DOI:</strong> {entry.entryTags.doi}
          </p>
          <p>
            <strong>Abstract:</strong> {entry.entryTags.abstract}
          </p>
          <hr />
        </div>
      ))}
    </main>
  );
};

export default Publications;
