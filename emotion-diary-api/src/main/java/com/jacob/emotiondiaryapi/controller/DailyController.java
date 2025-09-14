package com.jacob.emotiondiaryapi.controller;

import com.jacob.emotiondiaryapi.domain.dto.*;
import com.jacob.emotiondiaryapi.service.DailyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/daily")
public class DailyController {

    private final DailyService dailyService;

    @PostMapping
    public ResponseEntity<DailyResponse> create(@RequestBody DailyRequest dto) {
        DailyResponse response = dailyService.create(dto);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DailyResponse> findById(@PathVariable Long id) {
        DailyResponse response = dailyService.findById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<DailyResponse>> findAll(
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) Integer month) {
        List<DailyResponse> response = dailyService.findAll(year, month);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DailyResponse> update(@PathVariable Long id, @RequestBody DailyRequest dto) {
        DailyResponse response = dailyService.update(id, dto);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        dailyService.delete(id);
        return ResponseEntity.ok().build();
    }
}
