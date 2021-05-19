package com.example.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.product.User;

//@RepositoryRestResource(collectionResourceRel = "userdata",path = "userdata")
public interface UserRepository extends MongoRepository<User, String>{
}
