package com.rionegro.rionegro.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class EmpresaAgroquimicoEspecificacionKey implements Serializable {

    @Column(name = "id_empresa")
    Long empresaId;

    @Column(name = "id_agroquimico")
    Long agroquimicoId;

    @Column(name = "id_especificacion")
    Long especificacionId;

    public Long getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(Long empresaId) {
        this.empresaId = empresaId;
    }

    public Long getAgroquimicoId() {
        return agroquimicoId;
    }

    public void setAgroquimicoId(Long agroquimicoId) {
        this.agroquimicoId = agroquimicoId;
    }

    public Long getEspecificacionId() {
        return especificacionId;
    }

    public void setEspecificacionId(Long especificacionId) {
        this.especificacionId = especificacionId;
    }
}
