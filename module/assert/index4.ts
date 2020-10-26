const foo: number = 1;
// foo.length = 1 报错

// window.foo = 1 报错

(window as any).foo = 1;
