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
    public List<Account> get(String userid) {
        return accountService.get(userid);
    }

    @GetMapping("/date")
    public List<Account> get(String userid, Date startDate, Date endDate) {
        return accountService.get(userid, startDate, endDate);
    }

    @GetMapping("/category")
    public List<Account> get(String userid, String category) {
        return accountService.get(userid, category);
    }

    @GetMapping("/type")
    public List<Account> get(String userid, int type) {
        return accountService.get(userid, type);
    }
}
