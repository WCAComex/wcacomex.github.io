export default function(element, props) {
    if (typeof element === 'string') element = document.createElement(element);
    if (props) extendObj(element, props);
    return element;
    
    function extendObj(obj, props) {
        for (const prop in props) {
            if (prop === 'style' || prop === 'dataset') extendObj(element[prop], props[prop]);
            else obj[prop] = props[prop];
        };
    };
};