declare module '*.json' {
    const content: { [key: string]: any };
    export = content;
}

declare module '*.less' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.css' {
    const content: { [className: string]: string };
    export = content;
}