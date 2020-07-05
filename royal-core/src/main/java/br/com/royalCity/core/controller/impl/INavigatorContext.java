package br.com.royalCity.core.controller.impl;

import java.util.Map;

public interface INavigatorContext {

	public Map<String, Object> getAttributes();

	public void setAttribute(String key, Object attribute);
	
	public void setAttributes(Map<String, Object> attributes);

	public <R> R getAttribute(String key);

}
