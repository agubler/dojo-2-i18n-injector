import WidgetBase from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import I18nMixin from '@dojo/widget-core/mixins/I18n';

import * as css from './styles/helloWorld.m.css';
import bundle from './nls/HelloWorld';
import Label from './Label';
import I18nLabel from './I18nLabel';

const logo = require('./../img/logo.svg');

export class HelloWorld extends I18nMixin(WidgetBase) {
	protected render() {
		const messages = this.localizeBundle(bundle);
		return v('div', { classes: css.root }, [
			v('img', { src: logo, classes: css.logo }),
			w(Label, {}),
			w(I18nLabel, {}),
			v('div', { classes: css.label }, [ messages.messages.title ])
		]);
	}
}

export default HelloWorld;
