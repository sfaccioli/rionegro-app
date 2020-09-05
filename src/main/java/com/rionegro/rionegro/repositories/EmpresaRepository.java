package com.rionegro.rionegro.repositories;

import com.rionegro.rionegro.models.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {
}
