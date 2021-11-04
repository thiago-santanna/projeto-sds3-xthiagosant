package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsvendas.dto.SaleSumDto;
import com.devsuperior.dsvendas.dto.SaleSumSuccessDto;
import com.devsuperior.dsvendas.entities.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	@Query("select new com.devsuperior.dsvendas.dto.SaleSumDto(obj.seller, sum(obj.amount)) "
		 + " from Sale as obj group by obj.seller")
	List<SaleSumDto> amountGroupBySeller();
	
	@Query("select new com.devsuperior.dsvendas.dto.SaleSumSuccessDto(obj.seller, sum(obj.visited), sum(obj.deals)) "
			 + " from Sale as obj group by obj.seller")
	List<SaleSumSuccessDto> successGroupBySeller();
}
