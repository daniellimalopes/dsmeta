package com.devsuperior.dsmeta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entity.SalesEntity;
import com.devsuperior.dsmeta.repository.SalesRepository;

@Service
public class SalesService {

	@Autowired
	private SalesRepository salesRepository;

	public SalesEntity findById(Integer id) {
		return salesRepository.findById(id).orElseThrow(() -> new IllegalAccessError("Vendedor não existe"));

	}

	public List<SalesEntity> findAll(){
		return salesRepository.findAll();
		
	}
}
