import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import HelloWorld from './widgets/HelloWorld';
import Registry from '@dojo/widget-core/Registry';
import { registerI18nInjector } from '@dojo/widget-core/mixins/I18n';

const registry = new Registry();
const injector = registerI18nInjector({ locale: 'en'}, registry);

const Projector = ProjectorMixin(HelloWorld);
const projector = new Projector();
projector.setProperties({ registry });

// set interval switching locale
let locale = 'en';

setInterval(() => {
	locale = locale === 'en' ? 'en-OT' : 'en';
	injector.set({ locale });
}, 1000);

projector.append();
