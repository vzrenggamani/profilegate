import Link from "next/link";

export default function Ips() {
  return (
    <main>
      <header>
        <h1>
          Hak Kekayaan Intelektual
          <br />
          <small>Rengga Prakoso Nugroho</small>
        </h1>
        <p>
          Karsa cipta yang telah dikembangkan di laboratorium Teknologi
          Pendidikan, baik berupa aplikasi, buku, maupun media pembelajaran,
          dilindungi oleh hak cipta.
        </p>
        <p>
          Penggunaan diperbolehkan dengan mematuhi{" "}
          <Link href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            lisensi CC BY-NC-SA 4.0.
          </Link>
        </p>
      </header>

      <section>
        <h3>Pameran Karya Teknologi Pendidikan UM</h3>
        <p>
          Pameran Karya Teknologi Pendidikan 2023 adalah sebuah aplikasi
          berbasis web yang dibuat untuk memudahkan pengelolaan data pameran
          karya teknologi pendidikan yang diselenggarakan oleh Mahasiswa
          Departemen Teknologi Pendiidkan Universitas Negeri Malang.
        </p>
        <table>
          <tr>
            <th>Jenis</th>
            <th>Pencatatan DGIP</th>
            <th>Sitasi/DOI</th>
          </tr>
          <tr>
            <td>Program Komputer</td>
            <td>
              <Link href="https://e-hakcipta.dgip.go.id/index.php/c?code=ZjdjYjVmYTkzMTI1Y2M4MzYyMjY5YTg1MWM2MTI2NWYK">
                000475702
              </Link>
            </td>
            <td>
              <Link href="https://doi.org/10.5281/zenodo.10639741">
                10.5281/zenodo.10639741
              </Link>
            </td>
          </tr>
        </table>
        <p>
          Jika anda menggunakan aplikasi tersebut, mohon untuk menyertakan
          referensi berikut:
        </p>
        <code>
          <pre>
            {`@software{nugroho_2024_10639741,
  author       = {Nugroho, Rengga Prakoso and Ubaiddillah, Mohammad},
  title        = {Pameran Karya Teknologi Pendidikan UM},
  month        = feb,
  year         = 2024,
  publisher    = {Zenodo},
  version      = {v1.0.0},
  doi          = {10.5281/zenodo.10639741},
  url          = {https://doi.org/10.5281/zenodo.10639741}
}`}
          </pre>
        </code>
      </section>
    </main>
  );
}
