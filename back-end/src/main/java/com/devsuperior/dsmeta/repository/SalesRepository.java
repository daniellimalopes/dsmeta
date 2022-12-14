package com.devsuperior.dsmeta.repository;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsmeta.entity.SalesEntity;

@Repository
public interface SalesRepository extends JpaRepository<SalesEntity, Integer >{

	
	@Query("SELECT obj FROM SalesEntity obj WHERE obj.data BETWEEN :min AND :max ORDER BY obj.total DESC")
	Page<SalesEntity> findSales(LocalDate min, LocalDate max, Pageable pageable);

	
	
}
