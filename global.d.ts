import mongoose from "mongoose";

export {}

export type Roles = "admin" | "moderator"

declare global {
  interface CustomSession {
    metadata: {
      role?: Roles
    }
  }
}
declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

declare module "*.jpg" {
    const value: import("next/image").StaticImageData;
    export default value;
}

declare module "*.JPG" {
    const value: import("next/image").StaticImageData;
    export default value;
}

