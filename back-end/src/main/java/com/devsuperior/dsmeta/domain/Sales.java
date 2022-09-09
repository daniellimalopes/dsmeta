package com.devsuperior.dsmeta.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;

@Data
public class Sales {

	private Integer id;
	private LocalDate data;
	private String vendedor;
	private Integer visitas;
	private Integer vendas;
	private BigDecimal total;
}
