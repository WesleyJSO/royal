package br.com.royalCity.domain.impl;

import javax.persistence.Entity;
import javax.persistence.Table;

import br.com.royalCity.domain.DomainEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Table(name = "TSICID")
@Entity
@EqualsAndHashCode(callSuper=false)
public class Cidade extends DomainEntity{
	
	private String nome;
	
}
