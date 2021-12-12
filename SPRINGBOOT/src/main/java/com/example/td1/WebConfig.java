package com.example.td1;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.td1.metier.CoursMetier;
import com.example.td1.metier.CoursService;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
            .allowedOrigins("http://localhost:4200")
            .allowedMethods("GET","POST","PUT", "DELETE")
            .allowCredentials(true).maxAge(3600);

        // Add more mappings...
    }
    @Bean
    public CoursMetier coursService() {
    	return new CoursService();
    }
}
