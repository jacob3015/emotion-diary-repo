package com.jacob.emotiondiaryapi.domain.entity;

import com.jacob.emotiondiaryapi.util.DateTimeUtil;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@EqualsAndHashCode(of = "id")
@NoArgsConstructor(access = AccessLevel.PROTECTED) // jpa proxy
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@SequenceGenerator(name="daily_seq", sequenceName="daily_seq")
@Table(name = "daily")
public class Daily {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "daily_seq")
    private Long id;

    @Column(name = "emotion")
    private String emotion;

    @Column(name = "content")
    private String content;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public static Daily create(String emotion, String content) {
        return new Daily(null, emotion, content, LocalDateTime.now(), null);
    }

    public void update(String emotion, String content) {
        this.emotion = emotion;
        this.content = content;
        this.updatedAt = LocalDateTime.now();
    }
}
