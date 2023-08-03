// svg.d.ts (ou no mesmo arquivo do componente)
declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}
  