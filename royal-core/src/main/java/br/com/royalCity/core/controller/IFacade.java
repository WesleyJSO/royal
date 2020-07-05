package br.com.royalCity.core.controller;

import br.com.royalCity.domain.IEntity;

public interface IFacade<T extends IEntity> extends IEntity {

	void save(T aEntity, INavigationCase<? extends IEntity> aCase);

	void update(T aEntity, INavigationCase<? extends IEntity> aCase);

	void delete(T aEntity, INavigationCase<? extends IEntity> aCase);

	void findAll(INavigationCase<? extends IEntity> aCase);

	void findById(Integer id, INavigationCase<? extends IEntity> aCase);

	void find(T aFilter, INavigationCase<? extends IEntity> aCase);
	
}
