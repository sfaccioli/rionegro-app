package com.rionegro.rionegro.repositories;

import com.rionegro.rionegro.models.EmpresaAgroquimicoEspecificacionKey;
import com.rionegro.rionegro.models.EmpresaStock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpresaStockRepository extends JpaRepository<EmpresaStock, EmpresaAgroquimicoEspecificacionKey> {
}
