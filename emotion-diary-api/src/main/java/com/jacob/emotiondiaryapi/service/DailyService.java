package com.jacob.emotiondiaryapi.service;

import com.jacob.emotiondiaryapi.domain.dto.DailyRequest;
import com.jacob.emotiondiaryapi.domain.dto.DailyResponse;

import java.util.List;

public interface DailyService {

    DailyResponse create(DailyRequest dto);
    DailyResponse findById(Long id);
    List<DailyResponse> findAll(Integer year, Integer month);
    DailyResponse update(Long id, DailyRequest dto);
    void delete(Long id);
}
