package com.costrecorder.back.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

/**
 * @author yinzihang
 */
@Entity
@Table (name = "account")
public class Account {
    @Id
    @GeneratedValue
    @Column(name = "id")
    int id;

    @Column(name = "type")
    int type;

    @Column(name = "category")
    String category;

    @Column(name = "desc")
    String desc;

    @Column(name = "amount")
    double amount;

    @Column(name = "date")
    Date date;

    @Column(name = "userid")
    String userid;

    public Account() {
    }

    public Account(int id, int type, String category, String desc, double amount, Date date, String userid) {
        this.id = id;
        this.type = type;
        this.category = category;
        this.desc = desc;
        this.amount = amount;
        this.date = date;
        this.userid = userid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }
}
