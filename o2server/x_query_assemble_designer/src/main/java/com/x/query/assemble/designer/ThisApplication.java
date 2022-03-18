package com.x.query.assemble.designer;

import com.x.base.core.project.Context;
import com.x.base.core.project.cache.CacheManager;

public class ThisApplication {

	private ThisApplication() {
		// nothing
	}

	protected static Context context;

	public static Context context() {
		return context;
	}

	protected static void setContext(Context context) {
		ThisApplication.context = context;
	}

	public static void init() {
		try {
			CacheManager.init(context.clazz().getSimpleName());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void destroy() {
		try {
			CacheManager.shutdown();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
