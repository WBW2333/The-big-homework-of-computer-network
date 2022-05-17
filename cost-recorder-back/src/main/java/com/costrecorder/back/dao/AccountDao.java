package com.costrecorder.back.dao;

import com.costrecorder.back.pojo.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author yinzihang
 */
public interface AccountDao extends JpaRepository<Account, Integer> {
    /**
     * 以userid查找Account
     * @param userid 用户标识
     * @return List<Account>
     */
    List<Account> findByUserid(String userid);
}
