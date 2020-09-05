package com.rionegro.rionegro.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "tipo_agroquimico")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TipoAgroquimico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    @JsonBackReference
    @OneToMany(mappedBy = "tipoAgroquimico")
    Set<Agroquimico> agroquimicos;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Set<Agroquimico> getAgroquimicos() {
        return agroquimicos;
    }

    public void setAgroquimicos(Set<Agroquimico> agroquimicos) {
        this.agroquimicos = agroquimicos;
    }
}
