package br.com.royalCity.domain.impl;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Table;

import br.com.royalCity.domain.DomainEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Table(name = "TGFPAR")
@Entity
@EqualsAndHashCode(callSuper = false)
public class Parceiro extends DomainEntity{
	
	private String cpf;
	private String nome;
	private LocalDate dataNascimento;
	private String email;
	private String celular;
	private String telefone;
	private String telefoneComercial;
	private String telefoneContato;	
	private String cep;
	private String numEnd;
	private String razaoSocial;
	
}
