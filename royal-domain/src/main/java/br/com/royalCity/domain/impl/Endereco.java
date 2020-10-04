package br.com.royalCity.domain.impl;

import javax.persistence.Entity;
import javax.persistence.Table;

import br.com.royalCity.domain.DomainEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Table(name = "TSIEND")
@Entity
@EqualsAndHashCode(callSuper = false)
public class Endereco extends DomainEntity{
	
	private String tipo;
	private String nome;
}
