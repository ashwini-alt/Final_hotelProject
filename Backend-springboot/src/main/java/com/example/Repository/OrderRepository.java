package com.example.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.product.Order;

//@RepositoryRestResource(collectionResourceRel = "orderdata",path = "orderdata")
public interface OrderRepository extends MongoRepository<Order, String>{
}
