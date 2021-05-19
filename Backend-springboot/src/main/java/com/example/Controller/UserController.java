package com.example.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Repository.OrderRepository;
import com.example.Repository.RoomRepository;
import com.example.Repository.UserRepository;
import com.example.product.Order;
import com.example.product.Room;
import com.example.product.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoomRepository roomRepository; 
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/rooms")
    public List<Room> getAllRooms(){
        return (List<Room>) roomRepository.findAll();
    }

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return (List<Order>) orderRepository.findAll();
    }
    @PutMapping("/rooms/{roomId}")
    public void updateRoom(@PathVariable("roomId") String id, @RequestBody Integer val) {
        System.out.println("Update Room with ID = " + id + "...");
        String value= String.valueOf(val);
        List<Room> roomData = getAllRooms();
        if (value == null) {
            System.out.println("Empty");
            //return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        for(Room x: roomData) {
            if (x.getRoomId().equals(id)) {
                x.setAvaliable(value);
                //Room updatedroom =
                roomRepository.save(x);
                //return new ResponseEntity<>(updatedroom, HttpStatus.OK);
            } else if (x.getRoomId().equals(id)) {
                x.setAvaliable(value);
                roomRepository.save(x);
            } else if (x.getRoomId().equals(id)) {
                x.setAvaliable(value);
                roomRepository.save(x);
            } else if (x.getRoomId().equals(id)) {
                x.setAvaliable(value);
                roomRepository.save(x);
            }
        }
    }
    @DeleteMapping("/orders/{id}")
    public ResponseEntity deleteOrder(@PathVariable("id") String id) {
        System.out.println("Delete Room Bookinng with ID = " + id + "...");
        orderRepository.deleteById(id);
        return new ResponseEntity<>("Booking has been deleted!", HttpStatus.OK);
    }

    @PostMapping("/users")
    public void saveUser(@RequestBody User user) {

        System.out.println("Create");

        System.out.println(user);
        userRepository.save(user);
    }

    @PostMapping("/orders")
    public void saveOrder(@RequestBody Order order) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Create");
        order.setCurdate(String.valueOf(now));
        System.out.println(order);
        orderRepository.save(order);
    }

}

