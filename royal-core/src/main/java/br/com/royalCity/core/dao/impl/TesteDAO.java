package br.com.royalCity.core.dao.impl;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import br.com.royalCity.core.dao.GenericDAO;
import br.com.royalCity.domain.impl.Teste;

@Repository
@Transactional
public class TesteDAO extends GenericDAO<Teste> {

}
