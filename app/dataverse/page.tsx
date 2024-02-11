import Link from "next/link";
import type { Metadata } from "next";
import data_opensource from "@/data/opensource.json";

export const metadata: Metadata = {
  title: "Dataverse - Rengga Nugroho",
  description:
    "Lingkungan data terbuka untuk membagikan, mencari data terkait penelitian teknologi pembelajaran.",
};

export default function Dataverse() {
  return (
    <main>
      <header>
        <h1>
          Dataverse
          <br />
          <small>Rengga Prakoso Nugroho</small>
        </h1>
        <p>
          Lingkungan data terbuka untuk membagikan, mencari data terkait
          penelitian teknologi pembelajaran.
        </p>
        <p>
          Penggunaan diperbolehkan dengan mematuhi lisensi yang tercantum pada
          setiap data.
        </p>
      </header>

      <section>
        <h3>Daftar sumber data terbuka</h3>
        <ul>
          {/* return only data that have category dataset */}
          {data_opensource
            .filter(
              (item) =>
                item.category === "dataset" || item.category === "Dataset"
            )
            .map((item) => (
              <li key={item.id}>
                <Link href={`/dataverse/${item.id}`}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
