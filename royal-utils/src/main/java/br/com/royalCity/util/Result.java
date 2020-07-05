package br.com.royalCity.util;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("unchecked")
public class Result {

	public static final String RESULT_KEY = "result";
	public static final String RESULTS_KEY = "results";

	private Map<String, Object> params;
	private String message;
	private boolean error;

	public Result() {
		this.params = new HashMap<String, Object>();
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean hasError() {
		return this.error;
	}

	public void setError() {
		this.error = true;
	}

	public void addEntity(String key, Object entity) {
		params.put(key, entity);
	}

	public void addEntity(Object entity) {
		params.put(RESULT_KEY, entity);
	}

	public <R> void addEntities(Collection<R> collection) {
		params.put(RESULTS_KEY, collection);
	}

	public <R> R getEntity(String key) {
		return (R) params.get(key);
	}

	public <R> R getEntity() {
		return (R) params.get(RESULT_KEY);
	}

	public <R> R getEntities() {
		return (R) params.get(RESULTS_KEY);
	}

}
