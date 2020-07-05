package br.com.royalCity.rest.controller.impl;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.royalCity.domain.impl.Teste;
import br.com.royalCity.rest.controller.DomainEntityController;

@RestController
@RequestMapping(value = "${server.controller.prefix}teste")
public class TesteController extends DomainEntityController<Teste> {

	public TesteController() {
		super(Teste.class);
	}

}
