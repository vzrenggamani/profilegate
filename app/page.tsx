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
          Silakan melihat <Link href="/ipr">daftar lengkap karya ciptaan</Link>{" "}
          untuk melihat seluruh karya cipta yang telah dihasilkan.
        </p>
        <h3>Ringkasan karya ciptaan</h3>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Jenis</th>
              <th>Pencatatan</th>
              <th>DOI</th>
            </tr>
          </thead>
          <tbody>
            {data_ipr.map((ipr) => (
              <tr key={ipr.copyright_records_number}>
                <td>{ipr.name}</td>
                <td>{ipr.copyright_records_type}</td>
                <td>
                  <Link
                    href={`https://e-hakcipta.dgip.go.id/index.php/c?code=${ipr.copyright_url}`}
                  >
                    {ipr.copyright_records_number}
                  </Link>
                </td>
                <td>
                  {ipr.doi === "not available" ? (
                    ipr.doi
                  ) : (
                    <Link href={`https://doi.org/${ipr.doi}`}>
                      {ipr.doi.slice(8)}
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="opensource">
        <h2>Proyek Sumber Terbuka</h2>
        <p>
          Ciptaan yang didedikasikan untuk masyarakat umum. Dikembangkan secara
          terbuka dan dilisensikan untuk digunakan kembali.
        </p>
        <p>
          Silakan melihat{" "}
          <Link href="/opensource">daftar lengkap proyek sumber terbuka</Link>
        </p>
        <h3>Ringkasan proyek</h3>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Jenis</th>
              <th>Repository</th>
              <th>DOI</th>
            </tr>
          </thead>
          <tbody>
            {data_opensource.map((opensource) => (
              <tr key={opensource.doi}>
                <td>{opensource.name}</td>
                <td>{opensource.category}</td>
                <td>
                  <Link href={opensource.repository_url}>
                    {opensource.repository_host}
                  </Link>
                </td>
                <td>
                  {opensource.doi === "not available" ? (
                    opensource.doi
                  ) : (
                    <Link href={`https://doi.org/${opensource.doi}`}>
                      {opensource.doi.slice(8)}
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
