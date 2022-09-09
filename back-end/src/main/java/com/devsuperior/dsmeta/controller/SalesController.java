package com.devsuperior.dsmeta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entity.SalesEntity;
import com.devsuperior.dsmeta.service.SalesService;

@RestController
@RequestMapping("/sales")
public class SalesController {

	@Autowired
	private SalesService salesService;

	@GetMapping(value = "/{id}")
	public ResponseEntity<SalesEntity> findById(@PathVariable Integer id) {
		SalesEntity salesEntity = salesService.findById(id);
		return ResponseEntity.ok().body(salesEntity);
	}

	@GetMapping
	public Page<SalesEntity> findSales(@RequestParam(value = "minDate", defaultValue = "") String minDate,
			@RequestParam(value = "maxDate", defaultValue = "") String maxDate, Pageable pageable) {

		return salesService.findAll(minDate, maxDate, pageable);
	}
}
