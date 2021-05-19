package com.example.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.product.Room;

import java.util.Optional;

/*@RepositoryRestResource(collectionResourceRel = "roomdata",
        path = "roomdata")*/
public interface RoomRepository extends MongoRepository<Room, String> {
}