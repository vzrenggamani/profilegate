import Link from "next/link";
import data_ipr from "@/data/ipr.json";

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
          Penggunaan diperbolehkan dengan mematuhi lisensi yang tertera pada
          setiap ciptaan.
        </p>
      </header>

      <section>
        <h3>Daftar Kekayaan Intelektual</h3>
        <ul>
          {data_ipr.map((item) => (
            <li key={item.id}>
              <Link href={`/ipr/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
