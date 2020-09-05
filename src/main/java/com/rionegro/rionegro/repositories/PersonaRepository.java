package com.rionegro.rionegro.repositories;

import com.rionegro.rionegro.models.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepository extends JpaRepository<Persona, Long> {
}
