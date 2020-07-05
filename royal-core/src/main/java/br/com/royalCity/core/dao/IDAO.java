package br.com.royalCity.core.dao;

import java.util.Collection;
import java.util.Optional;

import br.com.royalCity.domain.DomainEntity;

public interface IDAO<T extends DomainEntity> {
	
	Optional<Collection<T>> saveAll(Collection<T> colection);

	Optional<Collection<T>> findAll(T entity);

	Optional<T> findById(Integer id, T clazz);

	Optional<T> saveSincronized(T aEntity);
	
	Optional<T> save(T aEntity);
	
	Optional<T> update(T aEntity);

	Optional<T> delete(T aEntity);
}