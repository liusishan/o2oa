package o2.collect.assemble.jaxrs.unit;

import com.x.base.core.project.exception.PromptException;

class ExceptionPasswordNotMatch extends PromptException {

	private static final long serialVersionUID = 1859164370743532895L;

	public ExceptionPasswordNotMatch() {
		super("密码不匹配.");
	}
}
