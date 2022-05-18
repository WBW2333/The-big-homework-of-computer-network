package com.costrecorder.back.controller;

import com.costrecorder.back.Config;
import com.costrecorder.back.pojo.ClientResult;
import com.costrecorder.back.utils.HttpUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author yinzihang
 */
@RestController
public class LoginController {

    @GetMapping("/api/login")
    public ClientResult login(String code) throws IOException {
        Config config = new Config();
        System.out.println(code);
        String urlHeader = "https://api.weixin.qq.com/sns/jscode2session";
        Map<String,String> urlParams = new HashMap<>(4);
        urlParams.put("appid", config.getAppId());
        urlParams.put("secret", config.getAppSecret());
        urlParams.put("js_code", code);
        urlParams.put("grant_type", "authorization_code");
        String httpResult = HttpUtils.getResponse(urlHeader,urlParams);

        return new ClientResult(httpResult);
    }
}
