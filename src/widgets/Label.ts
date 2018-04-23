import WidgetBase from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';

import * as css from './styles/helloWorld.m.css';
import bundle from './nls/HelloWorld';
import I18nLabel from './I18nLabel';

export class HelloWorld extends WidgetBase {
	protected render() {
		return [
			v('div', { classes: css.label }, [ bundle.messages.title ]),
			w(I18nLabel, {})
		];
	}
}

export default HelloWorld;
