package br.com.royalCity.rest.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.royalCity.domain.ApplicationEntity;

@RequestMapping("/")
@CrossOrigin(origins = "*")
public class BaseController extends ApplicationEntity {}