import React, { FC } from 'react'
import en_GB from './en-GB'
import zh_CN from './zh-CN'
import { FormattedMessage, MessageDescriptor, useIntl } from 'react-intl'

export const localeConfig = {
	zh_CN: zh_CN,
	en_GB: en_GB
}

interface Props extends MessageDescriptor {
	id: string
}

export const LocaleFormatter: FC<Props> = ({ ...props }) => {
	const notChildProps = { ...props, children: undefined }
	return <FormattedMessage {...notChildProps} id={props.id} />
}

type FormatMessageProps = (descriptor: Props) => string

export const useLocale = () => {
	const { formatMessage: _formatMessage, ...rest } = useIntl()
	const formatMessage: FormatMessageProps = _formatMessage
	return {
		...rest,
		formatMessage
	}
}
