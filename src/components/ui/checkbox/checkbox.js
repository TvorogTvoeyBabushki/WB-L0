import RenderService from '@/services/render.service'

import template from './checkbox.template.html?raw'
import styles from './checkbox.module.scss'

export class Checkbox {
	addStyles(variant) {
		this.element.classList.add(styles.checkbox)
		variant === 'active'
			? this.element.classList.add(styles.active)
			: this.element.classList.remove(styles.active)
	}

	draw() {
		this.element = RenderService.htmlToElement(template)

		this.addStyles()
		return this.element
	}
}
