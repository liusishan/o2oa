package o2.collect.assemble.jaxrs.unit;

import com.x.base.core.project.exception.PromptException;

class ExceptionMobileEmpty extends PromptException {

	private static final long serialVersionUID = -3287459468603291619L;

	public ExceptionMobileEmpty() {
		super("手机号不能为空.");
	}
}
