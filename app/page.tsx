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

      <section id="ipr">
        <h2>Hak Kekayaan Intelektual</h2>
        <p>
          Ciptaan yang telah dikembangkan oleh tim laboratorium & Learning
          Center Teknologi Pendidikan. Dilindungi oleh hak cipta.
        </p>
        <p>
          Silakan melihat <Link href="/ipr">daftar lengkap karya ciptaan.</Link>
        </p>
        {data_ipr.map((ipr) => (
          <div key={ipr.doi}>
            <h3>
              <Link href={ipr.copyright_url}>{ipr.name}</Link>
            </h3>
            <pre>
              <code>{JSON.stringify(ipr, null, 2)}</code>
            </pre>
          </div>
        ))}
      </section>

      <section id="opensource">
        <h2>Proyek Sumber Terbuka</h2>
        <p>
          Ciptaan yang didedikasikan untuk masyarakat umum. Dikembangkan secara
          terbuka dan dilisensikan untuk digunakan kembali.
        </p>
        <p>
          Silakan melihat <Link href="/opensource">daftar lengkap proyek.</Link>
        </p>
        {data_opensource.map((opensource) => (
          <div key={opensource.doi}>
            <h3>
              <Link href={opensource.repository_url}>{opensource.name}</Link>
            </h3>
            <pre>
              <code>{JSON.stringify(opensource, null, 2)}</code>
            </pre>
          </div>
        ))}
      </section>
    </>
  );
}
