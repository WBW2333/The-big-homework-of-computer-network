package com.costrecorder.back.controller;

import com.costrecorder.back.pojo.Account;
import com.costrecorder.back.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

/**
 * @author yinzihang
 */
@RestController
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    AccountService accountService;

    @GetMapping("/all")
    public List<Account> getAll(String userid) {
        return accountService.getAll(userid);
    }

    @GetMapping("/date")
    public List<Account> getByDate(String userid, Date startDate, Date endDate) {
        return accountService.getByDate(userid, startDate, endDate);
    }

    @GetMapping("/category")
    public List<Account> getByCategory(String userid, String category) {
        return accountService.getByCategory(userid, category);
    }

    @GetMapping("/type")
    public List<Account> getByType(String userid, int type) {
        return accountService.getByType(userid, type);
    }
}
