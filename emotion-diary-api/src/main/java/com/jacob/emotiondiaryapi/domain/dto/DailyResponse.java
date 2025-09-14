package com.jacob.emotiondiaryapi.domain.dto;

import com.jacob.emotiondiaryapi.domain.entity.Daily;
import com.jacob.emotiondiaryapi.util.DateTimeUtil;

import java.util.Optional;

public record DailyResponse(Long id, String emotion, String content, String createdAt, String updatedAt) {
    public static DailyResponse of(Daily entity) {
        Optional<String> createdAt = Optional.ofNullable(entity.getCreatedAt()).map(DateTimeUtil::format);
        Optional<String> updatedAt = Optional.ofNullable(entity.getUpdatedAt()).map(DateTimeUtil::format);

        return new DailyResponse(entity.getId(),
                entity.getEmotion(),
                entity.getContent(),
                createdAt.orElse(null),
                updatedAt.orElse(null));
    }
}
