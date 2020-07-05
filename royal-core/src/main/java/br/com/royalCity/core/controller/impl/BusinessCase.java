package br.com.royalCity.core.controller.impl;

import br.com.royalCity.core.controller.INavigationCase;
import br.com.royalCity.domain.IEntity;
import br.com.royalCity.util.Result;

public class BusinessCase<T extends IEntity> implements INavigationCase<T> {

	private Result result;
	private String name;
	private Boolean suspend = false;
	private T entity;
	private INavigatorContext context;

	public BusinessCase() {
		this.result = new Result();
		this.context = new NavigatorContext();
	}

	public BusinessCase(String name) {
		this.name = name;
		this.result = new Result();
		this.context = new NavigatorContext();
	}
	
	@Override
	public String getName() {
		return this.name;
	}

	@Override
	public Result getResult() {
		return this.result;
	}

	@Override
	public void suspendExecution() {
		this.suspend = true;
		this.getResult().setError();
	}

	@Override
	public Boolean isSuspendExecution() {
		return this.suspend;
	}

	public void setResult(Result result) {
		this.result = result;
	}

	public void setName(String name) {
		this.name = name;
	}

	public T getEntity() {
		return entity;
	}

	public void setEntity(T entity) {
		this.entity = entity;
	}

	@Override
	public void setContext(INavigatorContext context) {
		if (this.context == null) {
			this.context = context;
			return;
		}
		this.context.setAttributes(context.getAttributes());
	}

	@Override
	public INavigatorContext getContext() {
		return context;
	}

	@Override
	public void suspendExecution(String message) {
		suspendExecution();
		result.setMessage(message);
	}

}
