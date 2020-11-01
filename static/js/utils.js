let _app = {};
export function registerAppElement(elementName, elementValue) {
    _app[elementName] = elementValue;
    return _app[elementName];
}
export function getAppElement(elementName) {
    return _app[elementName];
}
