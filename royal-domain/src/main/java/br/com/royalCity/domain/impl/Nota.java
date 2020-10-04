package br.com.royalCity.domain.impl;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Table;

import br.com.royalCity.domain.DomainEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Table(name = "TGFCAB")
@Entity
@EqualsAndHashCode(callSuper = false)
public class Nota extends DomainEntity{
	
	private LocalDate dataVenda;
	
}
