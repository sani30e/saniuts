import foto from"./FOTOO.jpg";

function Profile() {
    return <img src={foto.src} alt="Sani Aliyah" className="fotoku" />;
}

export default function Hero() {
    return (
          <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-400 font-bold ">CV ONLINE</h1>
          <h2 className="text-3xl">Sani Aliyah</h2>
          <Profile />
          <p> Saya adalah seorang Mahasiswi semester 5 di kampus Ma'soem University dengan jurusan Komputerisasi Akuntansi
          </p>
          </div>
          );
          }
