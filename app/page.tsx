import Link from "next/link";
import data_ipr from "@/data/ipr.json";
import data_opensource from "@/data/opensource.json";
import socialmedia from "@/data/socialmedia.json";

export default function Home() {
  return (
    <>
      <header>
        <h1>Rengga Prakoso Nugroho</h1>
        <p>Empowering the nation through meaningful education.</p>
        <p>
          A dedicated researcher and educator deeply passionate about harnessing
          technology to revolutionize learning experiences.
        </p>
        <p>
          In essence, I am Rengga Prakoso Nugroho—a dynamic researcher and
          educator committed to reshaping the future of education through
          technology. With a strong foundation in educational theory and
          practical expertise in technology integration, I’m poised to make
          meaningful contributions to the ever-evolving landscape of learning.
        </p>

        <h2>
          <small>Research & Social Profile</small>
        </h2>
        <div>
          {socialmedia.map((item, index) => (
            <span key={item.name}>
              <Link href={item.url}>{item.name}</Link>
              {index < socialmedia.length - 1 && " | "}
            </span>
          ))}
        </div>
      </header>

      <section id="publications">
        <h2>
          <Link href="/publications">Publikasi Riset</Link>
        </h2>
        <p>
          Publikasi artikel, preprint dan laporan penelitian. peer-reviewed &
          non-reviewed
        </p>
        <Link href={`/publications`}>Lihat semua publikasi</Link>
      </section>

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
