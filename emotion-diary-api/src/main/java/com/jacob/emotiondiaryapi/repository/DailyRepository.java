package com.jacob.emotiondiaryapi.repository;

import com.jacob.emotiondiaryapi.domain.entity.Daily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface DailyRepository extends JpaRepository<Daily, Long> {

    List<Daily> findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThan(LocalDateTime start, LocalDateTime end);
}
