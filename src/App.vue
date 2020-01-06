<script>
import AppModel from '@/models/AppModel';
import AppCtrl from '@/controllers/AppSub';

const {emitService} = AppModel;
export default {
		onLaunch(launchParams) {
			AppCtrl.emit('app.init', emitService);
		},
		onShow(showParams) {
			console.log(showParams, 'app onShow');
		},
		onHide() {
			console.log('app onHide');
		}
	}
</script>
