package com.jacob.emotiondiaryapi.service.impl;

import com.jacob.emotiondiaryapi.domain.dto.DailyRequest;
import com.jacob.emotiondiaryapi.domain.dto.DailyResponse;
import com.jacob.emotiondiaryapi.domain.entity.Daily;
import com.jacob.emotiondiaryapi.exception.EntityNotFoundException;
import com.jacob.emotiondiaryapi.repository.DailyRepository;
import com.jacob.emotiondiaryapi.service.DailyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DailyServiceImpl implements DailyService {

    private final DailyRepository dailyRepository;

    @Override
    public DailyResponse create(DailyRequest dto) {
        Daily daily = Daily.create(dto.emotion(), dto.content());
        daily = dailyRepository.save(daily);
        return DailyResponse.of(daily);
    }

    @Override
    @Transactional(readOnly = true)
    public DailyResponse findById(Long id) {
        Daily daily = dailyRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id, Daily.class.getSimpleName()));
        return DailyResponse.of(daily);
    }

    @Override
    @Transactional(readOnly = true)
    public List<DailyResponse> findAll(Integer year, Integer month) {
        LocalDateTime start = LocalDateTime.of(year, month, 1, 0, 0);
        LocalDateTime end = start.plusMonths(1);

        return dailyRepository.findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThan(start, end).stream()
                .map(DailyResponse::of)
                .toList();
    }

    @Override
    public DailyResponse update(Long id, DailyRequest dto) {
        Daily daily = dailyRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id, Daily.class.getSimpleName()));
        daily.update(dto.emotion(), dto.content());
        return DailyResponse.of(daily);
    }

    @Override
    public void delete(Long id) {
        dailyRepository.deleteById(id);
    }
}
