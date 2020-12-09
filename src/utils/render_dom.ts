import Component from 'components/component/component';

export function render(query: string, block: Component) {
	const root = document.querySelector(query);
	if (root) {
		root.innerHTML = '';
		root.appendChild(block.element);
	}

	return root;
}
