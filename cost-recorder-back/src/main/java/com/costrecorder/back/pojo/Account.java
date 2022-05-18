package com.costrecorder.back.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

/**
 * @author yinzihang
 */
@Entity
@Table (name = "account")
@Data
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "record_type")
    private int type;

    @Column(name = "category")
    private String category;

    @Column(name = "note")
    private String note;

    @Column(name = "amount")
    private double amount;

    @DateTimeFormat(pattern = "yyyy/MM/dd")
    @Column(name = "record_date")
    private Date date;

    @Column(name = "userid")
    private String userid;
}
