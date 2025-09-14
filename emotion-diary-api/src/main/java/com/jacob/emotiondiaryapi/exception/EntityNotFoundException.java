package com.jacob.emotiondiaryapi.exception;

import lombok.Getter;

@Getter
public class EntityNotFoundException extends RuntimeException {

    private final Long id;
    private final String entityName;

    public EntityNotFoundException(Long id, String entityName) {
        this.id = id;
        this.entityName = entityName;
    }

    @Override
    public String getMessage() {
        return String.format("%s not found with id: %d", entityName, id);
    }
}
