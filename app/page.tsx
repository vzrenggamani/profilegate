import Link from "next/link";
import data_ipr from "@/data/ipr.json";
import data_opensource from "@/data/opensource.json";

export default function Home() {
  return (
    <>
      <header>
        <h1>Rengga Prakoso Nugroho</h1>
        <p>
          Mahasiswa departemen{" "}
          <Link href="https://tep.fip.um.ac.id">Teknologi Pendidikan, </Link>
          Universitas Negeri Malang.
        </p>
        <p>
          Sering meluangkan waktu bereksperimen dengan teknologi. Suka menulis
          di blog dan membuat video di YouTube.
        </p>

        <h2>
          <small>Research & Social Profile</small>
        </h2>
        <p>
          <Link href="https://scholar.google.com/citations?user=ftyl1Q0AAAAJ">
            scholar
          </Link>{" "}
          | <Link href="https://orcid.org/0000-0002-7604-7150">orcid</Link> |{" "}
          <Link href="https://www.researchgate.net/profile/Rengga-Nugroho">
            researchgate
          </Link>{" "}
          | <Link href="https://renggaprakosonugroho.my.id">blog</Link> |{" "}
          <Link href="https://youtube.com/@vzrenggamani">youtube</Link>
        </p>
      </header>

      {/* <section id="publications">
        <h2>
          <Link href="/publications">Publikasi Artikel</Link>
        </h2>
        <p>
          Publikasi artikel, preprint dan laporan penelitian. peer-reviewed &
          non-reviewed
        </p>
        <div>
          <h3>non-peer review</h3>
          <ul>
            {data_ipr.map((ipr) => (
              <li className="ipr-list" key={ipr.id}>
                <Link href={`/ipr/${ipr.id}`}>{ipr.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      <section id="ipr">
        <h2>
          <Link href="/ipr">Hak Kekayaan Intelektual</Link>
        </h2>
        <p>
          Ciptaan yang telah dikembangkan oleh tim laboratorium & Learning
          Center Teknologi Pendidikan.
        </p>
        <ul>
          {data_ipr.map((ipr) => (
            <li className="ipr-list" key={ipr.id}>
              <Link href={`/ipr/${ipr.id}`}>{ipr.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="dataset">
        <h2>
          <Link href="/dataverse">Dataset Penelitian</Link>
        </h2>
        <p>
          Data terbuka dari hasil penelitian yang telah dilakukan baik secara
          tim & individu.
        </p>
        <ul>
          {data_opensource
            .filter(
              (item) =>
                item.category === "dataset" || item.category === "Dataset"
            )
            .map((item) => (
              <li className="ipr-list" key={item.id}>
                <Link href={`/dataverse/${item.id}`}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </section>

      <section id="software">
        <h2>
          <Link href="/opensource">Software</Link>
        </h2>
        <p>Hasil pengembangan perangkat lunak yang bersifat open source.</p>
        <ul>
          {data_opensource
            .filter(
              (item) =>
                item.category === "software" || item.category === "Software"
            )
            .map((item) => (
              <li className="ipr-list" key={item.id}>
                <Link href={`/opensource/${item.id}`}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
