package com.x.program.center.jaxrs.zhengwudingding;

import com.x.base.core.container.EntityManagerContainer;
import com.x.base.core.container.factory.EntityManagerContainerFactory;
import com.x.base.core.project.exception.ExceptionAccessDenied;
import com.x.base.core.project.gson.XGsonBuilder;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.http.EffectivePerson;
import com.x.program.center.Business;
import com.x.program.center.zhengwudingding.PullSyncOrganization;
import com.x.program.center.zhengwudingding.PullSyncOrganization.PullResult;

class ActionPullSync extends BaseAction {

	ActionResult<Wo> execute(EffectivePerson effectivePerson) throws Exception {
		try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
			if (effectivePerson.isNotManager()) {
				throw new ExceptionAccessDenied(effectivePerson);
			}
			ActionResult<Wo> result = new ActionResult<>();
			Business business = new Business(emc);
			PullSyncOrganization o = new PullSyncOrganization();
			PullResult pullResult = o.execute(business);
			Wo wo = XGsonBuilder.convert(pullResult, Wo.class);
			result.setData(wo);
			return result;
		}
	}

	public static class Wo extends PullResult {
	}

}
