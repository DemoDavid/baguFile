const app = document.querySelector('#app');

const h = (type, props = {}, children = []) => ({
    type,
    props,
    children,
});

const view = () =>
    h("div", {}, [
        h("h1", {}, ["Hello"]),
        h("p", {}, ["from virtual DOM!"]),
        h("p", {}, ["from virtual DOM!"]),
        h("p", {}, ["from virtual DOM!"]),
        h("p", {}, ["from virtual DOM!"]),
    ]);

const render = (root, view) => {
    const rendered = view();

    diff(root, null, rendered);
};

const diff = (root, oldNode, newNode, index) => {
    // 判断节点是否变化，有变化则更新
    if (!oldNode) {
        root.appendChild(createElement(newNode));
    }
};

const createElement = (node) => {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const el = document.createElement(node.type);
    node.children.map(createElement).forEach(el.appendChild.bind(el));

    return el;
};
render(app, view);