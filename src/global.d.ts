export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }
  export class MeshLineMaterial extends THREE.ShaderMaterial {
    lineWidth: number;
    map?: THREE.Texture;
    useMap?: boolean;
    color?: THREE.Color | string | number;
    resolution?: [number, number];
    repeat?: [number, number];
  }
}

// 👉 ini yang penting untuk JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ReactThreeFiber.Object3DNode<any, typeof import('meshline').MeshLineGeometry>;
      meshLineMaterial: ReactThreeFiber.Object3DNode<any, typeof import('meshline').MeshLineMaterial>;
    }
  }
}
