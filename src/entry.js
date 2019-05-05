import Component from './components/component';
import Image from './components/image';
import Logo from './assets/images/logo-small.png';

import './assets/less/styles.less';

document.body.appendChild(Component('Hello world!'));
document.body.appendChild(Image(Logo));
