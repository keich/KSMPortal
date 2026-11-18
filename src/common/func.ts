import type { TreeNode }  from 'primevue/treenode'
import dayjs from "dayjs";
import { isDayjs }  from "dayjs";
import type { Dayjs }  from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

const localtz = dayjs.tz.guess();
	
function getIntByStatus(status: string): number {
    switch(status){
        case "INDETERMINATE":
            return 1;
        case "INFORMATION":
            return 2;
        case "WARNING":
            return 3;
        case "MAJOR":
            return 4;
        case "CRITICAL":
            return 5;
        default:
            return 0;
    }
}

function getInlineMessageSeverityByStatus(status: string): string {
	switch(status){
		case "INDETERMINATE":
			return "info"
		case "INFORMATION":
			return "info"
		case "WARNING":
			return "warn"
		case "MAJOR":
			return "warn"
		case "CRITICAL":
			return "error"
		default:
			return "success"
	}
}
		
export { getIntByStatus, getInlineMessageSeverityByStatus }