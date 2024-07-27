import data_iprs from "@/data/ipr.json";
import Link from "next/link";
import ClipboardButton from "@/components/ClipboardButton";
import type { Metadata, ResolvingMetadata } from "next";

interface Params {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return data_iprs.map((item) => ({
    params: {
      id: item.id,
    },
  }));
}

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const item = data_iprs.find((item) => item.id === params.id);

  return {
    title: item?.name || "Dataset Tidak Ditemukan",
    description: item?.description || "IPR Tidak Ditemukan",
    authors: [
      {
        name: "Rengga Prakoso Nugroho",
        url: "https://orcid.org/0000-0002-7604-7150",
      },
    ],
    creator: item?.author || "Rengga Prakoso Nugroho",
    abstract: item?.description || "IPR Tidak Ditemukan",
    generator: "Rengga Prakoso Nugroho",
    publisher: item?.author || "Rengga Prakoso Nugroho",
    keywords: item?.name || "IPR Tidak Ditemukan",
  };
}

export default function ProjectDataverse({ params }: Params) {
  const item = data_iprs.find((item) => item.id === params.id);

  if (!item) {
    return {
      notFound: true,
    };
  }

  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "Dataset",
  //   name: item.name,
  //   description: item.description,
  //   creator: [
  //     {
  //       "@type": "Person",
  //       name: "Rengga Prakoso Nugroho",
  //       sameAs: "https://orcid.org/0000-0002-7604-7150",
  //       givenName: "Rengga Prakoso",
  //       familyName: "Nugroho",
  //     },
  //   ],
  //   citation: `${item.author} (${item.year}). ${item.name}. ${item.publisher}. https://doi.org/${item.doi}`,
  //   identifier: item.doi,
  //   isAccessibleForFree: true,
  //   keywords: item.keywords,
  //   license: item.license,
  //   sameAs: item.repository_url,
  //   spatialCoverage: item.spatial_coverage,
  //   temporalCoverage: item.temporal_coverage,
  //   url: item.repository_url,
  //   version: item.version,
  //   distributioncontentUrl: item.repository_url,
  //   distribution: {
  //     "@type": "DataDownload",
  //     contentUrl: item.repository_url,
  //     encodingFormat: item.format,
  //     name: item.name,
  //   },
  //   publisher: {
  //     "@type": "Organization",
  //     name: item.publisher,
  //     url: item.repository_url,
  //   },
  // };

  const citationformat = `
@misc{${item.author.replace(/\s/g, "")}${item.year}-${item.id},
    author = {${item.author}},
    title = {${item.name}},
    year = {${item.year}},
    publisher = {${item.copyright_holder}},
    doi = {${item.doi}},
    url = {${item.copyright_url}}
}`
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ");

  return (
    <>
      <header>
        <h1>{item.name}</h1>
        <p>
          <small>Author: {item.author} </small>
        </p>
        <p>
          <small>
            DOI: <Link href={`https://doi.org/${item.doi}`}>{item.doi}</Link>
          </small>
        </p>
        <p>
          <small>
            License: <a href={item.license}>{item.license}</a>
          </small>
        </p>
        {/* add download button to the repository url */}
      </header>

      <section>
        <h2>Deskripsi</h2>
        <p>{item.description}</p>
      </section>

      <section>
        <h2>Metadata</h2>
        <dl>
          <dt>Jenis Ciptaan</dt>
          <dd>{item.copyright_records_type}</dd>
          <dt>Pemegang Hak Cipta</dt>
          <dd>{item.copyright_holder}</dd>
          <dt>Nomor Pendaftaran</dt>
          <dd>{item.copyright_records_number}</dd>
          <dt>Pertama kali diumumkan</dt>
          <dd>{item.copyright_first_published}</dd>
          <dt>Cakupan Lisensi</dt>
          <dd>{item.license}</dd>
        </dl>
      </section>

      <section>
        <h2>Citation</h2>
        <p>
          Jika anda menggunakan dataset ini, mohon untuk melakukan sitasi dengan
          referensi sebagai berikut:
        </p>
        <pre>{citationformat}</pre>
        <ClipboardButton citationformat={citationformat} />

        <blockquote>
          <p>
            {item.author} ({item.year}). {item.name}. {item.copyright_holder}.
            https://doi.org/{item.doi}
          </p>
        </blockquote>
      </section>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </>
  );
}
