package o2.collect.assemble.jaxrs.module;

import org.apache.commons.lang3.StringUtils;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;

import com.google.gson.JsonObject;
import com.x.base.core.container.EntityManagerContainer;
import com.x.base.core.container.factory.EntityManagerContainerFactory;
import com.x.base.core.entity.annotation.CheckPersistType;
import com.x.base.core.project.cache.ApplicationCache;
import com.x.base.core.project.exception.ExceptionAccessDenied;
import com.x.base.core.project.exception.ExceptionEntityNotExist;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.http.EffectivePerson;
import com.x.base.core.project.jaxrs.WrapBoolean;
import com.x.base.core.project.tools.DefaultCharset;

import o2.collect.assemble.Business;
import o2.collect.core.entity.Module;

class ActionEdit extends BaseAction {

	ActionResult<Wo> execute(EffectivePerson effectivePerson, String id, String name, String category,
			String description, byte[] bytes, FormDataContentDisposition disposition) throws Exception {
		try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
			if (effectivePerson.isNotManager()) {
				throw new ExceptionAccessDenied(effectivePerson);
			}
			ActionResult<Wo> result = new ActionResult<>();
			Business business = new Business(emc);
			String data = new String(bytes, DefaultCharset.charset);
			JsonObject dataObject = gson.fromJson(data, JsonObject.class);
			dataObject.addProperty("description", description);
			BriefModule brief = gson.fromJson(data, BriefModule.class);
			Module module = emc.find(id, Module.class);
			if (null == module) {
				throw new ExceptionEntityNotExist(id, Module.class);
			}
			if (StringUtils.isEmpty(name)) {
				throw new ExceptionNameEmpty();
			}
			if (this.nameExist(business, name, id)) {
				throw new ExceptionNameExist(name);
			}
			brief.setId(module.getId());
			brief.setName(name);
			brief.setCategory(category);
			brief.setDescription(description);
			module.setBrief(gson.toJson(brief));
			module.setName(name);
			module.setCategory(category);
			module.setData(gson.toJson(dataObject));
			emc.beginTransaction(Module.class);
			emc.check(module, CheckPersistType.all);
			emc.commit();
			business.moduleCache().removeAll();
			Wo wo = new Wo();
			wo.setValue(true);
			result.setData(wo);
			ApplicationCache.notify(Module.class);
			return result;
		}
	}

	public static class Wo extends WrapBoolean {

	}
}