export function getRoutePath(path?: string): string|null {
	if (path !== undefined) {
		const regExp = new RegExp(`${location.origin}(.*)`);
		const match: RegExpMatchArray | null = regExp.exec(path);
		if (match && match.length > 1) {
			return match[1];
		}
	}

	return null;
}
