/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/definisi-tep-2023',
            destination: 'https://renggaprakosonugroho.my.id/definisi-terbaru-teknologi-pendidikan-aect-2023-cakupan-lebih-luas-dan-relevansi-terkini/',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
