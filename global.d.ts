
declare module "*.jpg" {
    const value: import("next/image").StaticImageData;
    export default value;
}

declare module "*.JPG" {
    const value: import("next/image").StaticImageData;
    export default value;
}