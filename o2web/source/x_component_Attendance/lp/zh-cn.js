MWF.xApplication.Attendance.LP = {
	"title": "考勤管理",
	"delete" : "删除",
	"deleteDocumentTitle": "删除确认",
	"deleteDocument": "您确定要删除该信息吗?",
	"deleteDocumentOK": "删除成功",
	"createSuccess" : "创建成功",
	"updateSuccess" : "更新成功",
	"inputName" : "请输入名称",

	"dateFormatMonth": "%Y年%m月",
	"dateFormatOnlyMonth": "%m",
	"dateFormatDay": "%Y-%m-%d",
	"dateFormatMonthDayLocal": "%m月%d日",
	"dateFormat": "db",

	"month" : "月",
	"today" : "今天",
	"day" : "天",

	"cancel" : "取消",
	"ok" : "确定",

	"create_cancel_title": "取消新建确认",
	"create_cancel": "您确定要取消新建吗?",

	"normal" : "出勤", //绿色，正常
	"levelAsked":"请假或外出报备", //蓝色，请假
	"late":"迟到", //橙色，迟到
	"lateSelectText": ["","迟到","未迟到"],
	"leaveEarly":"早退", //橙色，早退
	"noSign":"缺勤", //粉红色,未签到
	"appealSuccess" : "申诉通过",
	"lackOfTime" : "工时不足",
	"abNormalDuty" : "异常打卡",
	"truefalseSelectText": ["","是","否"],
	"query": "查询",
	"wholeDay": "全天",
	"am": "上午",
	"pm": "下午",

	"absent" : "缺勤",
	"notAbsent" : "未缺勤",
	"absendSelectText": ["","缺勤","未缺勤"],

	"attendanceStatisic" : "考勤统计",
	"name" : "姓名",
	"onDutyTimes" : "上班打卡次数",
	"offDutyTimes" : "下班打卡次数",
	"onDutyDayCount" : "出勤人天数",
	"onSelfHolidayCount" : "请假或外出报备人天数",
	"absenceDayCount" : "缺勤人天数",
	"lateTimes" : "迟到次数",
	"leaveEarlyTimes" : "早退次数",
	"lackOfTimeCount" : "工时不足人次",
	"abNormalDutyCount" : "异常打卡人次",
	"resultNormal" : "正常打卡次数",
	"seriousLateTimes": "严重迟到次数",
	"absenteeismTimes": "矿工次数",
	"notSignedCount": "未打卡次数",

	"topUnitAttendanceDetail" : "公司出勤明细",
	"topUnitAttendanceStatic" : "公司出勤率统计",
	"unitAttendanceDetail":"部门出勤明细",
	"unitAttendanceStatic":"部门出勤率统计",
	"personAttendanceDetail": "个人出勤明细",
	"personAttendanceStatic" : "个人出勤率统计",
	"unitSigninDetail": "部门打卡明细",
	"unitSigninStatic": "部门打卡率统计",
	"personSigninDetail": "个人打卡明细",
	"personSigninStatic": "个人打卡率统计",
	"staticByDay" : "按日统计",
	"staticByMonth" : "按月统计",
	"type": "类型",
	"topUnit" : "公司",
	"unit" : "部门",
	"annuaal" : "年度",
	"months" : "月份",
	"date": "日期",
	"seeSchedule" : "查看排班时间表",
	"unfindSchedule" : "未找到您所在部门和公司的排班表",
	"scheduleTable" : "排班时间表",
	"signTime" : "打卡时间",
	"appeal" : "申诉",
	"createAppeal": "发起申诉",
	"viewAppealDetail": "查看申诉信息",
	"export" : "导出",
	"name1": "名称",
	"alias" : "别名",
	"range": "范围",
	"meter": "米",
	"description" : "备注",
	"save": "保存",
	"enableMove": "允许移动",
	"workPlaceEmptyNotice": "工作场所不能为空",
	"BaiduDeveloperCertification": "百度开发者认证",
	"registerBiaduNotice": "工作场所设置使用了百度地图开放平台的服务，你可以注册百度开发者认证来提高地图的并发量。认证完成后，请将密钥填至下方的输入框。",
	"openRegisterUrl": "点击此打开认证通道",
	"secretKey": "秘钥",

	"index" : {
		"attendanceCalendar":"考勤日历",
		"pieChart" : "考勤汇总",
		"lineChart" : "上下班走势",
		"absent":"缺勤",
		"offDutyTime":"出勤，打卡时间：",
		"levelAsked":"请假或外出报备"
	},

	"schedule" : {
		"inputVaild" : "单位、上班时间、下班时间、迟到起算时间、旷工起算时间均不能为空",
		"setSchedule" : "排班设置",
		"unit" : "单位",
		"workTime" : "上班时间",
		"offTime" : "下班时间",
		"lateTime":"迟到起算时间",

		"leaveEarlyTime":"早退起算时间",
		"absenteeismTime":"缺勤起算时间",
		"illegal":{
			"1":["下班时间不得早于上班时间"],
			"2":["午休开始时间不得早于上班时间","午休结束时间不得早于午休开始时间","下班时间不得早于午休结束时间"],
			"3":["上午下班时间不得早于上班时间","下午上班时间不得早于上午下班时间","下班时间不得早于下午上班时间"]
		},
		"lateStartTime":"上午迟到起算时间",
		"leaveEarlyStartTime":"下午早退起算时间",
		"leaveEarlyStartTimeMorning":"上午早退起算时间",
		"lateStartTimeAfternoon":"下午迟到起算时间",
		"signProxy":{
			"name":"打卡策略",
			"select":{
				"1":"两次打卡（上午上班，下午下班）",
				"2":"三次打卡（上午上班，下午下班加中午一次共三次）",
				"3":"四次打卡（上午下午都打上班下班卡）"
			},
			"2":{
				"middayRestStartTime":"午休开始时间",
				"middayRestEndTime":"午休结束时间",
			},
			"3":{
				"middayRestStartTime":"上午下班时间",
				"middayRestEndTime":"下午上班时间",
			}
		}
		//"" : "打卡有效时间",
		//"" : "从",
		//"" : "到",
		//"" : "旷工",
		//"" : "上班缺勤",
		//"" : "下班缺勤",
		//"" : "上下班均缺勤"
	},
	"holiday" : {
		"inputValid" : "年度、假期名称、开始时间、结束时间必填，请填写！",
		"setHoliday" : "法定假期设置",
		"year" : "年度",
		"name" : "假期名称",
		"startDate" : "开始日期",
		"endDate" : "结束日期",
		"makeUpClassDay" : "补班日期",
		"holidaySchedule" : "假期安排",
		"addMakeUpClassDay": "增加补班日期",
		"beginGreateThanEndNotice": "开始日期不能大于结束日期"
	},
	"permission" : {
		"setAttendancer" : "考勤员设置",
		"role" : "角色",
		"personName" : "人员",
		"unit" : "单位",
		"roleSelectText": ["公司管理员","部门管理员"]
	},
	"selfHoliday" : {
		"inputValid" : "部门、员工姓名、休假类型、开始时间、结束时间、休假天数必填，请填写！"
	},
	"nextActivity": "下一个活动：",
	"nextUser": "处理人：",
	"deal": "处理",
	"processStarted": "文件已启动",
	"processStartedMessage": "您启动了一个新的工作：",

	"auditStatus" : "审批状态",
	"auditStatusSelectText" : ["所有状态","待处理","审批通过","审批未通过"],
	"appealReason": "申诉原因",
	"appealReasonSelectText" : ["","临时请假","出差","因公外出","其他"],
	"department": "部门",
	"person" : "人员",
	"auditor": "审核人",
	"search": "搜索",
	"selectPerson": "选择人员",
	"selectCompany": "选择公司",
	"selectDepartment": "选择部门",
	"selectAppealNotice": "请先选择申诉",
	"agreeAppealConfirmTitle": "同意申诉",
	"agreeAppealConfirmContent": "确定处理您选择的{count}份申诉？",
	"actionSuccess": "处理成功",
	"disagreeAppealConfirmTitle": "不同意申诉",
	"disagreeAppealConfirmContent": "确定处理您选择的{count}份申诉？",
	"draft": "发起",
	"todo": "待处理",
	"approve": "审批通过",
	"deny": "审批不通过",
	"apealApplyForm": "申诉申请单",
	"apealForm": "申诉处理单",
	"employeeName": "员工姓名",
	"recordDate": "考勤日期",
	"onDutyTime": "上班打卡时间",
	"offDutyTime": "下班打卡时间",
	"attendanceStatus": "考勤状态",
	"appealStatus": "申诉状态",
	"appealStatusSelectText": ["申诉中","申诉未通过","申诉通过"],
	"address": "地点",
	"leaveType": "请假类型",
	"leaveTypeSelectText": ["","带薪年休假","带薪病假","带薪福利假","扣薪事假","其他"],
	"startTime": "开始日期",
	"endTime": "结束日期",
	"appealDescriptoin": "事由",
	"close": "关闭",
	"disagree": "不同意",
	"agree": "同意",
	"temporaryLeave": "临时请假",
	"out": "出差",
	"businessTrip": "因公外出",
	"other": "其他",
	"inputIdeaNotice": "请填写意见",
	"processSuccess": "处理成功",
	"noDepartment": "未找到您所在的部门，请联系管理员！",
	"signinType": "打卡类型",
	"signinTypeSelectText": ["", "上班打卡", "下班打卡"],
	"signinResult": "打卡结果",
	"signinResultSelectText": ["", "正常", "早退", "迟到", "严重迟到", "旷工迟到", "未打卡"],

	"systemSetting" : "系统设置",
	"reportTo": "汇报对象",
	"appealEnable": "申诉及审批功能启用状态",
	"appealSelectText": ["开启","关闭"],
	"appealAuditFlowType": "考勤结果申诉流程类型",
	"appealAuditFlowTypeSelectText": ["自定义流程","内置流程"],
	"appealAuditor": "申诉审核人",
	"appealAuditorType": "申诉审核人确定方式",
	"appealAuditorValue": "申诉审核人确定内容",
	"directSupervisor": "直属领导",
	"appealAuditFlow" : "自定义申请流程",
	"none": "无",
	"saveSuccess": "保存成功",
	"noReportToNotice": "组织管理中没有配置您的汇报对象，请联系管理员",
	"unitDuty": "所属部门职位",
	"noUnitDutyNotice": "系统中没有配置{unit}的{duty}职位，请联系管理员",
	"personAttribute": "人员属性",
	"noPersonAttribute": "系统中没有配置您的人员属性“{att}”，请联系管理员",
	"assignedPerson": "指定人",
	"directLeader": "直接主管",
	"noDirectLeader": "系统中没有配置您的人员属性“直接主管”，请联系管理员",
	"createAppealNotice": "申诉已提交",

	"offDutyAbbrev": "休",
	"onDutyAbbrev": "班",
	"attendanceSummary": "考勤汇总",
	"attendanceTrendChart": "上下班走势图",
	"trendChartLegend" : ['上班时间', '下班时间'],
	"attendanceTrend": "考勤趋势",
	"year": "年",

	"importExcelNotice": "请导入excel文件！",
	"analyseDataSuccess": "分析考勤数据成功",
	"statDataSuccess": "统计考勤数据成功",
	"importDataStep": "数据导入步骤",
	"importStepDescription": [
		"1、下载Excel模板，根据模板格式填写考勤数据；",
		"2、点击导入考勤数据按钮，选择考勤数据并确定，系统将校验考勤数据是否正确并导入数据；",
		"3、点击核对考勤数据按钮，选择需要核对的年度和月份，系统将核对需要考勤的人员的数据；" ,
		"4、点击分析考勤数据按钮，系统将生成出勤明细数据；" ,
		"5、点击统计考勤数据按钮，系统将生成个人、部门、公司的出勤率统计。"
	],
	"selectCheckMonth":"选择核对月份",
	"checkDetailSuccess": "考勤数据核对成功",
	"importDataResult":"考勤数据导入结果",
	"importDataResultSuccess": "您上传的文件:“{fileName}”已经成功导入。下面显示其中的{count}条：",
	"importDataResultFail": "您上传的文件:“{fileName}”未通过校验，有{errorCount}条错误数据。请修改后重新导入。下面显示其中的{count}条：",
	"importDataResultThList" : [
		"行号", "员工号", "员工名字", "日期","上午上班打卡时间","上午下班打卡时间","下午上班打卡时间","下午下班打卡时间","检查结果","描述"
	],
	"true": "正确",
	"false": "错误",
	"checkDataTitle": "正在检查数据",
	"checkDataContent": "开始检查数据，共{count}条",
	"importDataTitle": "正在导入数据",
	"importDataContent": "开始导入数据，共{count}条",
	"readyToImportData": "正在准备导入数据",
	"readyToImportData1": "正在准备导入数据...",
	"importSpeed": "条/秒",
	"checkingDataContent": "正检查数据: {speed}条/秒,共{total}条,剩余{remaining}条",
	"checkingDataErrorContent": ",出错{errorCount}条",
	"importingDataContent": "正导入数据: {speed}条/秒,共{total}条,剩余{remaining}条",
	"importingDataErrorContent": ",出错{errorCount}条",
	"hour":"小时",
	"mintue": "分",
	"second": "秒",
	"importSuccessTitle": "导入成功",
	"importSuccessContent": "共导入数据{total}条  速度: {speed}条/秒  耗时: {timeStr}",
	"importFailTitle": "导入失败",
	"importFailContent": "共有数据{total}条  出错: {errorCount}条  耗时: {timeStr} 请修改后重新导入",

	"myDetail": "我的出勤明细",
	"myDetailStatic": "我的出勤率统计",

	"cyclText" : "考勤周期：{start}至{end}",

	"personSetting": "考勤人员设置",
	"configType": "配置类型",
	"configTypeSelectText": ["需要考勤","不需要考勤"],
	"topUnitName": "公司名称",
	"unitName": "部门名称",
	"employeeNumber":"员工编号",
	"joininDate": "入职日期",

	"exportEmployeeHolidayRecord": "导出员工休假记录",
	"employeeHolidayRecord": "员工休假记录",

	"leaveType1": "休假类型",
	"leaveTypeSelectText1" : ["带薪年休假","带薪病假","带薪福利假","扣薪事假","其他"],
	"leaveDayCount": "休假天数",

	"statisticsPeriodSetting": "统计周期设置",
	"selectCompanyNotice": "双击选择，填写'*'匹配所有公司",
	"selectDepartmentNotice": "双击选择，填写'*'匹配所有部门",
	"statisticsCompany": "统计公司",
	"statisticsUnit": "统计部门",
	"cycleYear": "统计周期年份",
	"cycleMonth":"统计周期月份",
	"startDate": "开始日期",
	"endData": "结束日期",

	"selectStartEndEndDataNotice":"请选择开始日期和结束日期",
	"weekendSetting": "周末设置",
	"selectWeekend": "周末选择",

	"detail": "具体描述",
	"appealDate": "申诉日期",
	"auditOpinion": "审批意见",

	"holiday1": "节假日",
	"weekend": "周末",
	"workDaysoff": "调休工作日",
	"workDay": "工作日",

	"middayRestStartTime":"午休开始时间",
	"middayRestEndTime":"午休结束时间",
	"isCheckInOutOfRange": "是否范围外打卡",
	"yes": "是",
	"no": "否",

	"createWorkLocation":"新建工作场所",
	"createWorkLocationText": "点击后移到地图相应位置再次点击可创建",
	"setBaiduDeveloperCertification": "设置百度开发者认证",
	"setBaiduDeveloperCertificationText": "设置工作场所需要用到百度开发者认证",

	"action": "操作",
	"start": "开始时间",
	"end": "结束时间",

	"appealIsDisable": "考勤申诉审批已被停用",
	"batchDeal": "批量处理：",
	"holi": "假日",
	"work": "补班",
	"newHoliday": "新建假期配置"


};