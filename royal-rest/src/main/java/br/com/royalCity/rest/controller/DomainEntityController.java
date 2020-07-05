package br.com.royalCity.rest.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.royalCity.core.controller.IFacade;
import br.com.royalCity.core.controller.INavigator;
import br.com.royalCity.core.controller.impl.BusinessCase;
import br.com.royalCity.core.controller.impl.BusinessCaseBuilder;
import br.com.royalCity.core.controller.impl.Navigation;
import br.com.royalCity.domain.IEntity;
import br.com.royalCity.rest.domain.ResponseMessage;
import br.com.royalCity.util.Result;

public abstract class DomainEntityController<T extends IEntity> extends BaseController {

	@Autowired
	protected IFacade<T> facade;

	@Autowired
	protected INavigator<T> navigator;

	@Autowired
	private Map<String, Navigation<T>> navigations;

	protected Class<? extends T> clazz;

	public DomainEntityController(Class<? extends T> clazz) {
		this.clazz = clazz;
	}

	@PostMapping
	public @ResponseBody ResponseEntity<?> create(@RequestBody T entity) {
		try {
			BusinessCase<T> bCase = new BusinessCaseBuilder<T>()
					.forEntity(clazz)
					.withName(existingNavigation("SAVE_".concat(clazz.getSimpleName().toUpperCase())))
					.build();

			facade.save(entity, bCase);

			Result result = bCase.getResult();

			return serverResponse(result, entity);

		} catch (Exception e) {
			getLogger(clazz).error(e.getMessage(), e);
			return responseError("Erro ao cadastrar ".concat(clazz.getSimpleName()));
		}
	}

	@PutMapping
	public @ResponseBody ResponseEntity<?> update(@RequestBody T entity) {
		try {
			BusinessCase<T> bCase = new BusinessCaseBuilder<T>()
					.forEntity(clazz)
					.withName(existingNavigation("UPDATE_".concat(clazz.getSimpleName().toUpperCase())))
					.build();

			facade.update(entity, bCase);

			Result result = bCase.getResult();

			return serverResponse(result, entity);

		} catch (Exception e) {
			getLogger(clazz).error(e.getMessage(), e);
			return responseError("Erro ao atualizar ".concat(clazz.getSimpleName()));
		}
	}

	@GetMapping(path = "/{id}")
	public @ResponseBody ResponseEntity<?> find(@PathVariable(name = "id", required = false) Integer id) {
		try {
			BusinessCase<T> bCase = new BusinessCaseBuilder<T>()
					.forEntity(clazz)
					.withName(existingNavigation("FIND_".concat(clazz.getSimpleName().toUpperCase())))
					.build();

			facade.findById(id, bCase);

			Result result = bCase.getResult();

			return serverResponse(result, result.getEntity());

		} catch (Exception e) {
			getLogger(clazz).error(e.getMessage(), e);
			return responseError("Erro ao consultar ".concat(clazz.getSimpleName()));
		}
	}

	@GetMapping
	public @ResponseBody ResponseEntity<?> getEntities() {
		try {
 			BusinessCase<?> bCase = new BusinessCaseBuilder<T>()
					.forEntity(clazz)
					.withName(existingNavigation("FIND_ALL_".concat(clazz.getSimpleName().toUpperCase())))
					.build();

			facade.findAll(bCase);

			Result result = bCase.getResult();

			return serverResponse(result, result.getEntities());

		} catch (Exception e) {
			getLogger(clazz).error(e.getMessage(), e);
			return responseError("Erro ao consultar ".concat(clazz.getSimpleName()));
		}
	}

	protected String existingNavigation(String name) {
		return navigations.containsKey(name) ? name : BusinessCase.DEFAULT_CONTEXT_NAME;
	}

	protected ResponseEntity<?> responseError(String message) {
		ResponseMessage rm = new ResponseMessage(Boolean.TRUE, message);
		return new ResponseEntity<ResponseMessage>(rm, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	protected ResponseEntity<?> serverResponse(Result result, Object entity) throws Exception {
		if (result.hasError()) {
			return responseError(result.getMessage());
		} else if (entity == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(entity);
	}
}
