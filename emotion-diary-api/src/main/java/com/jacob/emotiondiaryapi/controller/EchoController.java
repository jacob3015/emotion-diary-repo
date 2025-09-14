package com.jacob.emotiondiaryapi.controller;

import com.jacob.emotiondiaryapi.domain.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/echo")
public class EchoController {

    @PostMapping
    public ResponseEntity<ApiResponse<String>> echo(@RequestBody String message) {
        return ResponseEntity.ok(ApiResponse.success(null, "echo: " + message));
    }
}
