declare module "react-katex" {
  import { ComponentType } from "react";

  type KatexProps = {
    math: string;
    errorColor?: string;
    renderError?: (error: Error) => React.ReactNode;
  };

  export const BlockMath: ComponentType<KatexProps>;
  export const InlineMath: ComponentType<KatexProps>;
}
