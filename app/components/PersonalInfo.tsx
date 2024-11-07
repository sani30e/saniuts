import React from 'react';

interface MyInfos {
  ttl: string; // Tempat, Tanggal Lahir
  gender: string;
  tinggiBadan: number;
  beratBadan: number;
  statusPernikahan: string;
  whatsapp: string;
  email: string;
}

const myInfos: MyInfos = {
  ttl: 'Bandung, 09 Desember 2002',
  gender: 'Wanita',
  tinggiBadan: 159,
  beratBadan: 49,
  statusPernikahan: 'Belum Menikah',
  whatsapp: '+62 856 4711 6689',
  email: '09sanialiyah@gmail.com',
};

// Styling object (inline styles)
const sectionStyle: React.CSSProperties = {
  backgroundColor: 'pink', // Background warna pink
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '20px auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const h2Style: React.CSSProperties = {
  textAlign: 'center',
  color: '#333',
  fontSize: '2rem', // Ukuran font lebih besar
  marginBottom: '20px', // Spasi bawah judul
};

const ulStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: '0',
};

const liStyle: React.CSSProperties = {
  marginBottom: '10px',
};

const strongStyle: React.CSSProperties = {
  color: '#555',
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#007BFF',
};

const PersonalInfo: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={h2Style}>Personal Info</h2>
      <ul style={ulStyle}>
        <li style={liStyle}><strong style={strongStyle}>TTL:</strong> {myInfos.ttl}</li>
        <li style={liStyle}><strong style={strongStyle}>Gender:</strong> {myInfos.gender}</li>
        <li style={liStyle}><strong style={strongStyle}>Tinggi Badan:</strong> {myInfos.tinggiBadan} cm</li>
        <li style={liStyle}><strong style={strongStyle}>Berat Badan:</strong> {myInfos.beratBadan} kg</li>
        <li style={liStyle}><strong style={strongStyle}>Status Pernikahan:</strong> {myInfos.statusPernikahan}</li>
        <li style={liStyle}><strong style={strongStyle}>Whatsapp:</strong> <a href={`https://wa.me/${myInfos.whatsapp.replace(/\D/g, '')}`} style={linkStyle}>{myInfos.whatsapp}</a></li>
        <li style={liStyle}><strong style={strongStyle}>Email:</strong> <a href={`mailto:${myInfos.email}`} style={linkStyle}>{myInfos.email}</a></li>
      </ul>
    </section>
  );
};

export default PersonalInfo;
