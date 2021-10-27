// 正整数验证
export const integerVerifyRule = { pattern: new RegExp(/^[+]{0,1}(\d+)$/g), message: '请填写正确的数字' }

// 数字校验规则
export const numberVerifyRule = { pattern: new RegExp(/^(0|([1-9]\d*))(\.\d+)?$/g), message: '请填写数字' }

// 两位小数
export const numberDecimal2VerifyRule = {
	pattern: new RegExp(/^(0|([1-9]\d*))(\.\d{0,2})?$/g),
	message: '最多只能输入两位小数'
}

export const getRequireRule = (string) => {
	return { required: true, message: string, validateTrigger: [] }
}

// 电话号码
export const getPhoneRule = () => {
	return {
		pattern: /^((13[0-9])|(14[5-9])|(15([0-35-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[135689]))\d{8}$/,
		message: '请输入正确的手机号码'
	}
}

// 身份证
export const getCardRule = () => {
	return {
		pattern: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
		message: '请输入正确的身份证号码'
	}
}
