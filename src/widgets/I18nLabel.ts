import WidgetBase from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import I18nMixin from '@dojo/widget-core/mixins/I18n';

import * as css from './styles/helloWorld.m.css';
import bundle from './nls/HelloWorld';

export class HelloWorld extends I18nMixin(WidgetBase) {
	protected render() {
		const messages = this.localizeBundle(bundle);
		return v('div', { classes: css.label }, [ messages.messages.title ]);
	}
}

export default HelloWorld;
