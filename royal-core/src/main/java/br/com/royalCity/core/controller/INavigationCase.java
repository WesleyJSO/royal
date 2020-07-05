package br.com.royalCity.core.controller;

import br.com.royalCity.core.controller.impl.INavigatorContext;
import br.com.royalCity.domain.IEntity;
import br.com.royalCity.util.Result;

public interface INavigationCase<T extends IEntity> extends IEntity {

	public static final String DEFAULT_CONTEXT_NAME = "DEFAULT_CONTEXT";

	public String getName();

	public Result getResult();

	public void suspendExecution();
	
	public void suspendExecution(String message);

	public Boolean isSuspendExecution();

	public void setContext(INavigatorContext context);

	public INavigatorContext getContext();

	public T getEntity();

}
