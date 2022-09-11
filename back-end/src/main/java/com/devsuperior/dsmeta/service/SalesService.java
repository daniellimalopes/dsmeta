package com.devsuperior.dsmeta.service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmeta.entity.SalesEntity;
import com.devsuperior.dsmeta.repository.SalesRepository;

@Service
public class SalesService {

	@Autowired
	private SalesRepository salesRepository;

	public SalesEntity findById(Integer id) {
		return salesRepository.findById(id).orElseThrow(() -> new IllegalAccessError("Vendedor não existe"));

	}

	@Transactional
	public Page<SalesEntity> findAll(String minDate, String maxDate, Pageable pageable) {

		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

		LocalDate min = minDate.isEmpty() ? today : LocalDate.parse(minDate);
		LocalDate max = maxDate.isEmpty() ? today : LocalDate.parse(maxDate);

		return salesRepository.findSales(min, max, pageable);

	}

}
