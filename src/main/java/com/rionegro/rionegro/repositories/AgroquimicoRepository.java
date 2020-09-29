package com.rionegro.rionegro.repositories;

import com.rionegro.rionegro.models.Agroquimico;
import org.hibernate.SQLQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaDelete;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.metamodel.Metamodel;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

public interface AgroquimicoRepository extends JpaRepository<Agroquimico, Long> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE agroquimico a SET tipo_agroquimic_id= (:tipo.intValue()) " + "WHERE a.id= (:id.intValue()) ", nativeQuery = true)
    public void updateTipo(Long tipo, Long id);

}
