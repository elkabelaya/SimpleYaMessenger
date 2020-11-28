
const OBJECT_PATH_DELIMITER = '.';

export function isObjectKey(key: string) {
	return key.indexOf(OBJECT_PATH_DELIMITER) > 0;
}

export function getValueFromObject(path: string, obj: any, defaultValue?: string|number) {
	const keys: string[] = path.split(OBJECT_PATH_DELIMITER);

	let result = obj;
	for (let key of keys) {
		result = result[key];
		if (result === undefined) {
			return defaultValue;
		}
	}

	// 0 ->0
	// null -> defaultValue
	// undefined -> defaultValue
	// someValue -> someValue
	return result == null ? defaultValue : result;
}
