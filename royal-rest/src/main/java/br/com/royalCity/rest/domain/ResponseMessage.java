package br.com.royalCity.rest.domain;

import br.com.royalCity.domain.ApplicationEntity;

public class ResponseMessage extends ApplicationEntity {

	private Boolean hasError;
	private String message;
	
	public ResponseMessage(Boolean hasError, String message) {
		this.hasError = hasError;
		this.message = message;
	}
	
	public Boolean getHasError() {
		return hasError;
	}

	public String getMessage() {
		return message;
	}	
}
