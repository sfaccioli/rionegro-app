package com.rionegro.rionegro.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "agroquimico")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@org.springframework.data.annotation.Immutable
public class Agroquimico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private String marca;


    /*@JsonManagedReference
    @OneToMany(mappedBy = "agroquimico")
    Set<EmpresaStock> stockEmpresa;
    */

    @ManyToOne(cascade = CascadeType.MERGE)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "tipoAgroquimicoId")
    TipoAgroquimico tipoagroquimico;

    public TipoAgroquimico getTipoagroquimico() {
        return tipoagroquimico;
    }

    public void setTipoagroquimico(TipoAgroquimico tipoagroquimico) {
        this.tipoagroquimico = tipoagroquimico;
    }

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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }



    /*
    public Set<EmpresaStock> getStockEmpresa() {
        return stockEmpresa;
    }

    public void setStockEmpresa(Set<EmpresaStock> stockEmpresa) {
        this.stockEmpresa = stockEmpresa;
    }*/

}
