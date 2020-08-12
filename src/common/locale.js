import lang_en from './lang/en/locale';
import lang_zh from './lang/zh/locale';

module.exports = (lang='zh')  => {
	let locale = {};
	switch(lang) {
		case 'en' :
			locale = lang_en;
			break;
		default: 
			locale = lang_zh;
	}
	return locale;
}