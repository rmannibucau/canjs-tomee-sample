package com.github.rmannibucau.canjs.sample.resource;

import com.github.rmannibucau.canjs.sample.domain.Issue;
import lombok.extern.java.Log;

import java.util.Collection;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import javax.annotation.PostConstruct;
import javax.ejb.Startup;
import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;

@Log
@Path("tomee")
@ApplicationScoped
@Startup // tomee feature but allows to preload the cache at bootstrap
public class TomEEResource {
    private Future<Collection<Issue>> cache;

    @PostConstruct
    private void download() {
        cache = ClientBuilder.newClient()
                    .target("https://api.github.com")
                    .path("/repos/apache/tomee/issues")
                    .queryParam("state", "closed")
                    .request(MediaType.APPLICATION_JSON_TYPE)
                    .async()
                    .get(new GenericType<Collection<Issue>>() {});
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Issue> issues() {
        try {
            return cache.get();
        } catch (InterruptedException e) {
            Thread.interrupted();
        } catch (ExecutionException e) {
            // no-op
        }
        return Collections.emptyList();
    }
}
