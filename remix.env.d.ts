/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

/// <reference types="@google/model-viewer" />

export declare global {
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": React.DetailedHTMLProps<
          React.AllHTMLAttributes<
            Partial<globalThis.HTMLElementTagNameMap['model-viewer']>
          >,
          Partial<globalThis.HTMLElementTagNameMap['model-viewer']>
        >;
      }
    //   interface MyElementAttributes {
    //     src: string,
    //     children?: any,
    //     id?: any,
    //     ref?: any,
    //     class?: string,
    //     alt: string,
    //     ar?: boolean,
    //   }
    }
}