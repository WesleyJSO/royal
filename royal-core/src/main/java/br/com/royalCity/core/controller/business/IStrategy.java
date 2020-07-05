package br.com.royalCity.core.controller.business;

import br.com.royalCity.core.controller.INavigationCase;
import br.com.royalCity.domain.IEntity;

public interface IStrategy<T extends IEntity> extends IEntity {

	public void process(T aEntity, INavigationCase<T> aCase);

}
