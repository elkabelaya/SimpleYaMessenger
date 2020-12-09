import BaseService from 'services/base_service';

export default class FormService extends BaseService {
	protected _form?: HTMLFormElement;

	start(form: HTMLFormElement) {
		this._form = form;
		form.setAttribute('novalidate', 'true');
		form.addEventListener('submit', this._submitForm.bind(this));
		form.addEventListener('focus', handleForm, true);
		form.addEventListener('blur', handleForm, true);
	}

	submit(_data?: unknown) {
		throw new Error('Method not implemented.');
	}

	_submitForm(event: Event): void {
		event.preventDefault();
		if (validateForm(event.target) && Boolean(this)) {
			let formObject: any = {};
			let formData = new FormData(this._form);

			formData.forEach(function (value, key) {
				formObject[key] = value;
			});

			this.submit(formObject);
		}
	}
}

const handleForm: EventListener = (event: Event): void => {
	validate(event.target);
};

function validate(target: any): boolean {
	const isValid = isValidInput(target);
	if (isValid) {
		target.classList.remove('invalid');
	} else {
		target.classList.add('invalid');
	}

	return isValid;
}

function isValidInput(input: any) {
	return Boolean(input.value) && input.value.search(input.pattern) === 0;
}

function validateForm(form: any): boolean {
	const inputs = form.querySelectorAll('.input__input');
	let isValid = true;
	inputs.forEach((input: HTMLElement) => {
		isValid = validate(input) && isValid;
	});

	return isValid;
}
