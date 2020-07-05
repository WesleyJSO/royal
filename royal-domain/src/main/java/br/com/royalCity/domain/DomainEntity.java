package br.com.royalCity.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;

@Data
@Entity
@JsonInclude(Include.NON_NULL)
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class DomainEntity implements IEntity {

	@Id
  	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id;
}
