export function converArray(recArray) {
    return recArray.map((obj) => obj.toObject());
}
export function convertObject(recObject) {
    return recObject ? recObject.toObject() : recObject;
}
