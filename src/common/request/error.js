import {showToast} from './tip';

function onerror(data) {
	const {errcode, errmsg} = data;
	if(errcode) { //非零，异常的情况
		switch(errcode) {
			case "401": //401未登陆
				
				break;
			case "402": //没有授权
			
				break;
			case "404": // notfound
			
				break;
			case "500": //服务端错误
			
				break;
			default:
				showToast(errmsg, 2000);
				break;
		}
		
	}
}

export default onerror;