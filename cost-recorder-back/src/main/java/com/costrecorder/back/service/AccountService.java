package com.costrecorder.back.service;

import com.costrecorder.back.dao.AccountDao;
import com.costrecorder.back.pojo.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author yinzihang
 */
@Service
public class AccountService {
    @Autowired
    AccountDao accountDao;

    public List<Account> getAll(String userid) {
        return accountDao.findByUserid(userid);
    }

    public List<Account> getByDate(String userid, Date startDate, Date endDate) {
        List<Account> result = new ArrayList<>();
        List<Account> accounts = accountDao.findByUserid(userid);
        for (Account account : accounts) {
            Date accountDate = account.getDate();
            if (accountDate.compareTo(startDate) >= 0 && accountDate.compareTo(endDate) <= 0) {
                result.add(account);
            }
        }
        return result;
    }

    public List<Account> getByCategory(String userid, String category) {
        List<Account> result = new ArrayList<>();
        List<Account> accounts = accountDao.findByUserid(userid);
        for (Account account : accounts) {
            if (account.getCategory().equals(category)) {
                result.add(account);
            }
        }
        return result;
    }

    public List<Account> getByType(String userid, int type) {
        List<Account> result = new ArrayList<>();
        List<Account> accounts = accountDao.findByUserid(userid);
        for (Account account : accounts) {
            if (account.getType() == type) {
                result.add(account);
            }
        }
        return result;
    }

    public void addAccount(Account account) {
        accountDao.save(account);
    }

    public void deleteAccount(int id) {
        accountDao.deleteById(id);
    }
}
