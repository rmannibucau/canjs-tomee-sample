package com.github.rmannibucau.canjs.sample.domain;

import lombok.Data;
import org.apache.johnzon.mapper.JohnzonProperty;

import java.util.Date;

@Data
public class Issue {
    private long id;
    private String title;
    private String body;
    private String url;

    @JohnzonProperty("created_at")
    private Date createdAt;

    @JohnzonProperty("closed_at")
    private Date closedAt;
}
