package br.com.royalCity.core.controller.business.impl;

import org.springframework.stereotype.Component;

import br.com.royalCity.core.controller.INavigationCase;
import br.com.royalCity.core.controller.business.IStrategy;
import br.com.royalCity.domain.DomainEntity;

@Component
public class IdValidator implements IStrategy<DomainEntity> {

	@Override
	public void process(DomainEntity aEntity, INavigationCase<DomainEntity> aCase) {

		if (aEntity != null && aEntity.getId() > 0) {
			return;
		}

		aCase.suspendExecution();
		aCase.getResult().setMessage("ID: " + aEntity.getId() + " inexistente ou inválido");
	}

}
