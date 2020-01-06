var jweixin = require('jweixin-module');
import api from '../common/app_request'


export default {
    //判断是否在微信中  
    isWechat: function() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/micromessenger/i) == 'micromessenger') {
            // console.log('是微信客户端')
            return true;
        } else {
            // console.log('不是微信客户端')
            return false;
        }
    },
    //初始化sdk配置  
    initJssdk:function(callback){
		api.initJssdk({"url" : location.href.split('#')[0]},function(res){
			if(res){
			    jweixin.config({
			        debug: true,
			        appId: res.appId,
			        timestamp: res.timestamp,
			        nonceStr: res.nonceStr,
			        signature: res.signature,
			        jsApiList: [
			            'checkJsApi',
			            'getLocation',
						'scanQRCode',
						'translateVoice'
			        ]
			    });
			    //配置完成后，再执行分享等功能  
			    if (callback) {
			        callback(res);
			    }
			}
			
		})
    },
	// 不需要签名的配置
	initConfig:function(callback){
		jweixin.config({
		    jsApiList: [
		        'checkJsApi',
		        'getLocation',
				'scanQRCode',
				'translateVoice'
		    ]
		});
		callback()
		
	},
	// 公众号扫码
	scanFn:function(callback){
		if (!this.isWechat()) {
		    console.log('不是微信客户端')
		    return;
		}
		this.initJssdk(function(rst) {
		    jweixin.ready(function() {
		        console.info('扫码ready',rst)
				jweixin.scanQRCode({
						needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
						scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
						success: function (res) {
							callback(res)
					}
				});
		    });
		});
		
		
	},
    //在需要定位页面调用
    location: function(callback) {
        if (!this.isWechat()) {
            console.log('不是微信客户端')
            return;
        }
        console.info('定位')
        this.initJssdk(function(res) {
            jweixin.ready(function() {
                console.info('定位ready')
                jweixin.getLocation({
                    type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        // console.log(res);
                        callback(res)
                    },
                    fail:function(res){
                        console.log(res)
                    },
                    // complete:function(res){
                    //     console.log(res)
                    // }
                });
            });
        });
    }
}