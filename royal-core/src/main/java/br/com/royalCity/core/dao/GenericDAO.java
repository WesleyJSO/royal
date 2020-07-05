package br.com.royalCity.core.dao;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import br.com.royalCity.core.repository.IRepository;
import br.com.royalCity.domain.DomainEntity;

@Service
@Transactional
public abstract class GenericDAO<T extends DomainEntity> implements IDAO<T> {

	private static final String REPOSITORY = "Repository";

	@PersistenceContext
	protected EntityManager em;

	@Autowired
	private Map<String, IRepository<T>> mapRepository;

	private IRepository<T> getRepository(T clazz) {
		
		String name = clazz.getClass().getSimpleName().replace("helper", "").concat(REPOSITORY);
		IRepository<T> repository = mapRepository.entrySet().stream()
				.filter(entry -> entry.getKey().equalsIgnoreCase(name))
				.findFirst()
				.map(entry -> entry.getValue())
				.orElse(null);
		
		Assert.notNull(repository, "Repositório " + name.toUpperCase() + " não existe.");
		return repository;
	}

	@Override
	@Transactional
	public Optional<T> findById(Integer id, T clazz) {
		return getRepository(clazz).findById(id);
	}

	@Override
	public Optional<Collection<T>> saveAll(Collection<T> entities) {
		return Optional.ofNullable(getRepository(entities.stream().findAny().get())
				.saveAll(entities));
	}

	@SuppressWarnings("unchecked")
	@Override
	public Optional<Collection<T>> findAll(T entity) {
		return Optional.ofNullable((List<T>) em
				.createQuery("from ".concat(entity.getClass().getName()), entity.getClass())
				.setMaxResults(500)
				.getResultList());
	}

	@Override
	synchronized public Optional<T> saveSincronized(final T aEntity) {
		return Optional.of(getRepository(aEntity).saveAndFlush(aEntity));
	}

	@Override
	public Optional<T> save(final T aEntity) {
		return Optional.of(getRepository(aEntity).saveAndFlush(aEntity));
	}

	@Override
	public Optional<T> update(T aEntity) {
		return save(aEntity);
	}

	@Override
	public Optional<T> delete(T aEntity) {
		getRepository(aEntity).delete(aEntity);
		return Optional.ofNullable(aEntity);
	}
}
