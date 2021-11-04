package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSumSuccessDto {

	private String sellerName;
	private Long sumVisited;
	private Long sumDeals;
	
	public SaleSumSuccessDto() {
		// TODO Auto-generated constructor stub
	}

	public SaleSumSuccessDto(Seller seller, Long sumVisited, Long sumDeals) {
		this.sellerName = seller.getName();
		this.sumVisited = sumVisited;
		this.sumDeals = sumDeals;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getSumVisited() {
		return sumVisited;
	}

	public void setSumVisited(Long sumVisited) {
		this.sumVisited = sumVisited;
	}

	public Long getSumDeals() {
		return sumDeals;
	}

	public void setSumDeals(Long sumDeals) {
		this.sumDeals = sumDeals;
	}
	
	
}
