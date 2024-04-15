import Link from "next/link";
import type { Metadata } from "next";
import data_opensource from "@/data/opensource.json";

export const metadata: Metadata = {
  title: "Opensource - Rengga Nugroho",
  description: "Aplikasi & Teknologi Sumber Terbuka",
};

export default function Dataverse() {
  return (
    <main>
      <header>
        <h1>
          Opensource
          <br />
          <small>Rengga Prakoso Nugroho</small>
        </h1>
        <p>Aplikasi & Teknologi Sumber Terbuka</p>
        <p>
          Penggunaan diperbolehkan dengan mematuhi lisensi yang tercantum pada
          setiap aplikasi/teknologi.
        </p>
      </header>

      <section>
        <h3>Daftar Aplikasi/Teknologi Sumber Terbuka</h3>
        <ul>
          {/* return only data that have category dataset */}
          {data_opensource
            .filter(
              (item) =>
                item.category === "Software" || item.category === "Opensource"
            )
            .map((item) => (
              <li key={item.id}>
                <Link href={`/opensource/${item.id}`}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
