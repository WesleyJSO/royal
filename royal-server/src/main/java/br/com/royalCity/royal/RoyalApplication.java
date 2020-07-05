package br.com.royalCity.royal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan("br.com.royalCity.domain")
@ComponentScan(basePackages={"br.com.royalCity"})
@EnableJpaRepositories(basePackages={"br.com.royalCity.core"})
@EnableAutoConfiguration
@SpringBootApplication
public class RoyalApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoyalApplication.class, args);
	}
}
