package br.com.royalCity.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.royalCity.domain.DomainEntity;

public interface IRepository<T extends DomainEntity> extends JpaRepository<T, Integer> {}