package br.com.royalCity.core.controller.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import br.com.royalCity.core.controller.IFacade;
import br.com.royalCity.core.controller.INavigationCase;
import br.com.royalCity.core.controller.INavigator;
import br.com.royalCity.core.dao.GenericDAO;
import br.com.royalCity.domain.DomainEntity;
import br.com.royalCity.domain.IEntity;

@Component
@Transactional
public class Facade<T extends DomainEntity> implements IFacade<T> {

	private static final String DAO = "DAO";
	
	@Autowired
	private INavigator<T> navigator;

	@Autowired
	private Map<String, GenericDAO<T>> mapDAO;
	
	private GenericDAO<T> getDAO(T clazz) {
		String name = clazz.getClass().getSimpleName().concat(DAO);
		GenericDAO<T> dao = mapDAO.entrySet().stream()
			.filter(entry -> entry.getKey().equalsIgnoreCase(name))
			.map(entry -> entry.getValue())
			.peek(System.out::println)
			.findAny()
			.orElse(null);
	
		Assert.notNull(dao, "DAO não encontrado, considere criar um DAO apropriado ou nomear corretamente o DAO existente.");
		return dao;
	}
	
	@Override
	public void save(T aEntity, INavigationCase<? extends IEntity> aCase) {
		
		navigator.run(aEntity, aCase);
		if(!aCase.getResult().hasError() && !aCase.isSuspendExecution()) {	
			GenericDAO<T> dao = getDAO(aEntity);
			Optional<T> saved = dao.save(aEntity);
			aCase.getResult().addEntity(saved.orElse(null));
		}
	}

	@Override
	public void update(T aEntity, INavigationCase<? extends IEntity> aCase) {

		navigator.run(aEntity, aCase);
		if(!aCase.getResult().hasError() && !aCase.isSuspendExecution()) {
			GenericDAO<T> dao = getDAO(aEntity);
			Optional<T> updated = dao.update(aEntity);
			aCase.getResult().addEntity(updated.orElse(null));
		}
	}

	@Override
	public void delete(T aEntity, INavigationCase<? extends IEntity> aCase) {

		navigator.run(aEntity, aCase);
		if(!aCase.getResult().hasError() && !aCase.isSuspendExecution()) {
			GenericDAO<T> dao = getDAO(aEntity);
			Optional<T> deleted = dao.delete(aEntity);
			aCase.getResult().addEntity(deleted.orElse(null));
		}
	}

	@Override
	public void findAll(INavigationCase<? extends IEntity> aCase) {
		try {
			@SuppressWarnings("unchecked")
			T clazz = (T) aCase.getEntity();
			if(!aCase.getResult().hasError() && !aCase.isSuspendExecution()) {
				GenericDAO<T> dao = getDAO(clazz);
				Optional<Collection<T>> found = dao.findAll(clazz);
				aCase.getResult().addEntities(found.orElse(new ArrayList<>()));
			}
		} catch (IllegalArgumentException | SecurityException e) {
			// @FIXME - add logger
			e.printStackTrace();
		}
	}

	@Override
	public void findById(Integer id, INavigationCase<? extends IEntity> aCase) {
		try {
			@SuppressWarnings("unchecked")
			T clazz = (T) aCase.getEntity();
			GenericDAO<T> dao = getDAO(clazz);
			Optional<T> found = dao.findById(id, clazz);
			aCase.getResult().addEntity(found.orElse(null));	
		} catch (IllegalArgumentException | SecurityException e) {
			// @FIXME - add logger
			e.printStackTrace();
		}
	}

	@Override
	public void find(T aFilter, INavigationCase<? extends IEntity> aCase) {
		// TODO Auto-generated method stub
		
	}
}
