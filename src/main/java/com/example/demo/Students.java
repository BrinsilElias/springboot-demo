package com.example.demo;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Students {
    @Id
    private String id;
    private String firstname;
    private String lastname;
    private String email;
    private Gender gender;

    public Students(String firstname, String lastname, String email, Gender gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.gender = gender;
    }
}
