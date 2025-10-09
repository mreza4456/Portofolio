// src/types/r3f-meshline.d.ts

// Impor properti yang diperlukan untuk Material dan Texture
import { Material, Texture } from 'three';
import { MeshLineMaterial } from 'meshline';
import { MeshLineMaterialParameters } from 'meshline/types'; // Jika tersedia

// Augmentasi modul react-three/fiber untuk menambahkan elemen kustom
declare module '@react-three/fiber' {
  interface IntrinsicElements {
    // Tipe dasar untuk MeshLineGeometry (hanya properti attach)
    meshLineGeometry: {
      attach?: string;
      // Tambahkan properti lain dari MeshLineGeometry jika diperlukan (misalnya: points)
    };

    // Tipe untuk MeshLineMaterial
    meshLineMaterial: JSX.IntrinsicElements['meshBasicMaterial'] & {
      attach?: string;
      color?: string | number;
      depthTest?: boolean;
      // Properti khusus dari MeshLineMaterial
      resolution: [number, number]; // Penting, harus berupa array 2 angka
      useMap?: boolean;
      map?: Texture;
      repeat?: [number, number];
      lineWidth?: number;
      // Gunakan Partial untuk properti opsional
    } & Partial<MeshLineMaterialParameters>; 
    // Menggunakan MeshLineMaterialParameters dari 'meshline/types' jika tersedia adalah cara terbaik
  }
}