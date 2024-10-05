/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/definisi-tep-2023',
            destination: 'https://renggaprakosonugroho.my.id/definisi-terbaru-teknologi-pendidikan-aect-2023-cakupan-lebih-luas-dan-relevansi-terkini/',
            permanent: true,
          },
             {
            source: '/folder-riset',
            destination: 'https://drive.google.com/drive/folders/1Y6eR2oJ2k3CLzPGrY-LvwoCHR9nCCanE?usp=sharing',
            permanent: true,
          },
            {
            source: '/cv',
            destination: 'https://file.reng.my.id/src/docs/RenggaPrakosoNugroho_CV.pdf',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
