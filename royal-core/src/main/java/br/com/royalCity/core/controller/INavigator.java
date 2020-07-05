package br.com.royalCity.core.controller;

import br.com.royalCity.domain.IEntity;

@SuppressWarnings("rawtypes")
public interface INavigator<E extends IEntity> extends IEntity {

	public void run(IEntity aEntity, INavigationCase aCase);

}
